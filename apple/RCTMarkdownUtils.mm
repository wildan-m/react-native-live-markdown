#import <RNLiveMarkdown/RCTMarkdownUtils.h>
#import <RNLiveMarkdown/MarkdownParser.h>
#import <RNLiveMarkdown/MarkdownFormatter.h>

@implementation RCTMarkdownUtils {
  MarkdownParser *_markdownParser;
  MarkdownFormatter *_markdownFormatter;
}

- (instancetype)init
{
  if (self = [super init]) {
    _markdownParser = [MarkdownParser new];
    _markdownFormatter = [MarkdownFormatter new];
  }

  return self;
}

// Returns nil only on the main thread, when the ranges are not cached yet. The
// text is then parsed in the background and `onAsyncFormattingReady` is called
// once the ranges are cached.
- (nullable NSArray<MarkdownRange *> *)markdownRangesForText:(nonnull NSString *)text
                                                withParserId:(nonnull NSNumber *)parserId
{
  NSArray<MarkdownRange *> *markdownRanges = [_markdownParser cachedRangesForText:text withParserId:parserId];

  if (markdownRanges == nil) {
    if ([NSThread isMainThread]) {
      // Never run the parser from the main thread. If the worklet runtime is
      // busy, the wait can pass the ~2s limit and iOS kills the app (Sentry
      // APP-EF1, APP-M0W). Parse in the background instead and let the owner
      // format the text again from `onAsyncFormattingReady`.
      __weak RCTMarkdownUtils *weakSelf = self;
      [_markdownParser warmCacheAsyncForText:text
                                withParserId:parserId
                                  completion:^{
        // This only runs for the newest text, so it can't loop forever: the
        // next pass finds the ranges in the cache (or the text changed again,
        // and then a new pass was needed anyway).
        void (^handler)(void) = weakSelf.onAsyncFormattingReady;
        if (handler != nil) {
          handler();
        }
      }];
      return nil;
    }
    // Background threads can parse right here: the ~2s limit only applies to
    // the main thread, and parsing no longer holds a lock the main thread
    // waits on.
    markdownRanges = [_markdownParser parse:text withParserId:parserId];
  }

  return markdownRanges;
}

- (void)applyMarkdownFormatting:(nonnull NSMutableAttributedString *)attributedString
      withDefaultTextAttributes:(nonnull NSDictionary<NSAttributedStringKey, id> *)defaultTextAttributes
{
  // `_markdownStyle` and `_parserId` may not be initialized immediately due to the order of mount instructions
  // props update will be executed after the view hierarchy is initialized.
  if (_markdownStyle == nil || _parserId == nil) {
    return;
  }

  // This is the path the component view uses (text storage delegate and text
  // field observer), so it runs on the main thread. It must not run the parser
  // there either: a props update during a mount (for example one started by a
  // layout animation) parsed here and froze the app while it waited for the
  // worklet runtime (Sentry APP-M0W).
  NSArray<MarkdownRange *> *markdownRanges = [self markdownRangesForText:attributedString.string withParserId:_parserId];
  if (markdownRanges == nil) {
    // Leave the attributes as they are for now. `onAsyncFormattingReady` is
    // called once the ranges are cached, and the owner formats the text again.
    return;
  }

  [_markdownFormatter formatAttributedString:attributedString
                   withDefaultTextAttributes:defaultTextAttributes
                          withMarkdownRanges:markdownRanges
                           withMarkdownStyle:_markdownStyle];
}

- (void)applyMarkdownFormatting:(nonnull NSMutableAttributedString *)attributedString
      withDefaultTextAttributes:(nonnull NSDictionary<NSAttributedStringKey, id> *)defaultTextAttributes
                  markdownStyle:(nonnull RCTMarkdownStyle *)markdownStyle
                       parserId:(nonnull NSNumber *)parserId
{
  // The lock only covers the two shared fields. Holding it while parsing and
  // formatting froze the app (Sentry APP-EF1): parsing waits for the worklet
  // runtime, so a background thread could hold this lock while waiting, leaving
  // the main thread stuck on the lock while measuring. The formatting below
  // uses the arguments instead of the fields, so every call still gets a
  // matching style and parserId.
  @synchronized (self) {
    _markdownStyle = markdownStyle;
    _parserId = parserId;
  }

  NSArray<MarkdownRange *> *markdownRanges = [self markdownRangesForText:attributedString.string withParserId:parserId];
  if (markdownRanges == nil) {
    // Measure plain text for now; `onAsyncFormattingReady` asks for a new
    // measure once the ranges are ready, so the wrong sizes (h1 font, code
    // font, blockquote indent, emoji) do not stay. This rarely happens - text
    // changes are usually parsed on a background thread first, so the main
    // thread finds the ranges in the cache.
    return;
  }

  [_markdownFormatter formatAttributedString:attributedString
                   withDefaultTextAttributes:defaultTextAttributes
                          withMarkdownRanges:markdownRanges
                           withMarkdownStyle:markdownStyle];
}

@end
