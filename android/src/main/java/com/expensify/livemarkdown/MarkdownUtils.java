package com.expensify.livemarkdown;

import static com.facebook.infer.annotation.ThreadConfined.UI;

import android.content.res.AssetManager;
import android.text.SpannableStringBuilder;
import android.text.Spanned;

import androidx.annotation.NonNull;

import com.facebook.infer.annotation.Assertions;
import com.facebook.infer.annotation.ThreadConfined;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.views.text.CustomLineHeightSpan;
import com.facebook.soloader.SoLoader;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class MarkdownUtils {
  static {
    SoLoader.loadLibrary("livemarkdown");
  }

  private static boolean IS_RUNTIME_INITIALIZED = false;

  @ThreadConfined(UI)
  public static void maybeInitializeRuntime(AssetManager assetManager) {
    UiThreadUtil.assertOnUiThread();
    if (IS_RUNTIME_INITIALIZED) {
      return;
    }
    try {
      InputStream inputStream = assetManager.open("react-native-live-markdown-parser.js");
      byte[] buffer = new byte[inputStream.available()];
      inputStream.read(buffer);
      inputStream.close();
      String code = new String(buffer);
      nativeInitializeRuntime(code);
      IS_RUNTIME_INITIALIZED = true;
    } catch (IOException e) {
      throw new RuntimeException("Failed to initialize Markdown runtime");
    }
  }

  private static native void nativeInitializeRuntime(String code);

  @ThreadConfined(UI)
  private static String parseMarkdown(String input) {
    UiThreadUtil.assertOnUiThread();
    return nativeParseMarkdown(input);
  }

  private static native String nativeParseMarkdown(String input);

  public MarkdownUtils(@NonNull AssetManager assetManager) {
    mAssetManager = assetManager;
  }

  private final @NonNull AssetManager mAssetManager;

  private String mPrevInput;

  private String mPrevOutput;

  private MarkdownStyle mMarkdownStyle;

  public void setMarkdownStyle(@NonNull MarkdownStyle markdownStyle) {
    mMarkdownStyle = markdownStyle;
  }

  public void applyMarkdownFormatting(SpannableStringBuilder ssb) {
    Objects.requireNonNull(mMarkdownStyle, "mMarkdownStyle is null");

    removeSpans(ssb);

    String input = ssb.toString();
    String output;
    if (input.equals(mPrevInput)) {
      output = mPrevOutput;
    } else {
      output = parseMarkdown(input);
      mPrevInput = input;
      mPrevOutput = output;
    }

    try {
      JSONArray ranges = new JSONArray(output);
      JSONArray adjustedRanges =  adjustRanges(ranges);

      for (int i = 0; i < adjustedRanges.length(); i++) {
            JSONObject range = adjustedRanges.getJSONObject(i);
            String type = range.getString("type");
            int start = range.getInt("start");
            int length = range.getInt("length");
            int depth = range.optInt("depth", 1);
            int end = start + length;
            applyRange(ssb, type, start, end, depth);
          }
        } catch (JSONException e) {
          // Do nothing
        }
  }

  public JSONArray adjustRanges(JSONArray ranges) throws JSONException {
    JSONArray newRanges = new JSONArray();
    for (int i = 0; i < ranges.length(); i++) {
        JSONObject range = ranges.getJSONObject(i);
        String type = range.getString("type");
        int start = range.getInt("start");
        int length = range.getInt("length");
        int end = start + length;

        if (type.equals("emoji")) {
            // If the type is emoji, remove any overlapping bold or italic range
            for (int j = 0; j < newRanges.length(); j++) {
                JSONObject existingRange = newRanges.getJSONObject(j);
                String existingType = existingRange.getString("type");
                int existingStart = existingRange.getInt("start");
                int existingLength = existingRange.getInt("length");
                int existingEnd = existingStart + existingLength;

                if ((existingType.equals("bold") || existingType.equals("italic")) && (existingStart < end && existingEnd > start)) {
                    // If the emoji range is completely within the existing range, split the existing range
                    if (start > existingStart && end < existingEnd) {
                        existingRange.put("length", start - existingStart);
                        JSONObject newRange = new JSONObject();
                        newRange.put("type", existingType);
                        newRange.put("start", end);
                        newRange.put("length", existingEnd - end);
                        newRanges.put(newRange);
                    } else {
                        // Otherwise, adjust the existing range to not overlap with the emoji range
                        if (start > existingStart) {
                            existingRange.put("length", start - existingStart);
                        } else if (end < existingEnd) {
                            existingRange.put("start", end);
                            existingRange.put("length", existingEnd - end);
                        } else {
                            newRanges.remove(j);
                            j--;
                        }
                    }
                }
            }
        }
        newRanges.put(range);
    }
    return newRanges;
}

  private void applyRange(SpannableStringBuilder ssb, String type, int start, int end, int depth) {
    switch (type) {
      case "bold":
        setSpan(ssb, new MarkdownBoldSpan(), start, end);
        break;
      case "italic":
        setSpan(ssb, new MarkdownItalicSpan(), start, end);
        break;
      case "strikethrough":
        setSpan(ssb, new MarkdownStrikethroughSpan(), start, end);
        break;
      case "emoji":
        setSpan(ssb, new MarkdownEmojiSpan(mMarkdownStyle.getEmojiFontSize()), start, end);
        break;
      case "mention-here":
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getMentionHereColor()), start, end);
        setSpan(ssb, new MarkdownBackgroundColorSpan(mMarkdownStyle.getMentionHereBackgroundColor()), start, end);
        break;
      case "mention-user":
        // TODO: change mention color when it mentions current user
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getMentionUserColor()), start, end);
        setSpan(ssb, new MarkdownBackgroundColorSpan(mMarkdownStyle.getMentionUserBackgroundColor()), start, end);
        break;
      case "syntax":
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getSyntaxColor()), start, end);
        break;
      case "link":
        setSpan(ssb, new MarkdownUnderlineSpan(), start, end);
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getLinkColor()), start, end);
        break;
      case "code":
        setSpan(ssb, new MarkdownFontFamilySpan(mMarkdownStyle.getCodeFontFamily(), mAssetManager), start, end);
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getCodeColor()), start, end);
        setSpan(ssb, new MarkdownBackgroundColorSpan(mMarkdownStyle.getCodeBackgroundColor()), start, end);
        break;
      case "pre":
        setSpan(ssb, new MarkdownFontFamilySpan(mMarkdownStyle.getPreFontFamily(), mAssetManager), start, end);
        setSpan(ssb, new MarkdownForegroundColorSpan(mMarkdownStyle.getPreColor()), start, end);
        setSpan(ssb, new MarkdownBackgroundColorSpan(mMarkdownStyle.getPreBackgroundColor()), start, end);
        break;
      case "h1":
        setSpan(ssb, new MarkdownBoldSpan(), start, end);
        CustomLineHeightSpan[] spans = ssb.getSpans(0, ssb.length(), CustomLineHeightSpan.class);
        if (spans.length >= 1) {
          int lineHeight = spans[0].getLineHeight();
          setSpan(ssb, new MarkdownLineHeightSpan(lineHeight * 1.5f), start, end);
        }
        // NOTE: size span must be set after line height span to avoid height jumps
        setSpan(ssb, new MarkdownFontSizeSpan(mMarkdownStyle.getH1FontSize()), start, end);
        break;
      case "blockquote":
        MarkdownBlockquoteSpan span = new MarkdownBlockquoteSpan(
          mMarkdownStyle.getBlockquoteBorderColor(),
          mMarkdownStyle.getBlockquoteBorderWidth(),
          mMarkdownStyle.getBlockquoteMarginLeft(),
          mMarkdownStyle.getBlockquotePaddingLeft(),
          depth);
        setSpan(ssb, span, start, end);
        break;
      default:
        throw new IllegalStateException("Unsupported type: " + type);
    }
  }

  private void setSpan(SpannableStringBuilder ssb, MarkdownSpan span, int start, int end) {
    ssb.setSpan(span, start, end, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
  }

  private void removeSpans(SpannableStringBuilder ssb) {
    // We shouldn't use `removeSpans()` because it also removes SpellcheckSpan, SuggestionSpan etc.
    MarkdownSpan[] spans = ssb.getSpans(0, ssb.length(), MarkdownSpan.class);
    for (MarkdownSpan span : spans) {
      ssb.removeSpan(span);
    }
  }
}
