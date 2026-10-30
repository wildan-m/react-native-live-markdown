import {expect} from '@jest/globals';
import type {MarkdownTextInputElement} from '../MarkdownTextInput.web';
import {parseRangesToHTMLNodes} from '../web/utils/parserUtils';
import {parseInnerHTMLToText} from '../web/utils/inputUtils';
import parseExpensiMark from '../parseExpensiMark';

/**
 * Builds an input element whose DOM still contains the full text while its stored value is unchanged,
 * which is the state the delete fallback in parseInnerHTMLToText handles (the native deletion is not reflected in the DOM yet).
 */
function createUnchangedInput(text: string) {
  const target = parseRangesToHTMLNodes(text, parseExpensiMark(text), true, {}, true).dom as unknown as MarkdownTextInputElement;
  target.value = text;
  return target;
}

describe('parseInnerHTMLToText delete fallback', () => {
  it('should parse the DOM back to the stored value when nothing is deleted', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('kjhgkgk'), 7, 7, 'insertText', true)).toBe('kjhgkgk');
  });

  it('should clear the text when the whole text is selected', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('kjhgkgk'), 0, 7, 'deleteContentBackward', true)).toBe('');
  });

  it('should remove only the selected range when the selection starts at the beginning', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('hhj'), 0, 2, 'deleteContentBackward', true)).toBe('j');
  });

  it('should remove the selected range when the selection is in the middle', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('abcdef'), 2, 4, 'deleteContentForward', true)).toBe('abef');
  });

  it('should remove the character before a collapsed cursor', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('abc'), 2, 2, 'deleteContentBackward', true)).toBe('ac');
  });

  it('should not duplicate the text when the cursor is collapsed at the beginning', () => {
    expect(parseInnerHTMLToText(createUnchangedInput('abc'), 0, 0, 'deleteContentBackward', true)).toBe('abc');
  });
});
