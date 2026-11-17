import React, {act} from 'react';
import {expect} from '@jest/globals';
import MarkdownTextInput from '../MarkdownTextInput.web';
import parseExpensiMark from '../parseExpensiMark';

type Root = {render: (node: React.ReactNode) => void; unmount: () => void};
// react-dom ships without type declarations in this repo.
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const {createRoot} = require('react-dom/client') as {createRoot: (container: Element) => Root};

// react-native-web ships ESM under dist/, which jest does not transform, so point the web style helpers at its CJS build.
function mockWithDefault(mod: {default?: unknown}) {
  return {__esModule: true, default: mod.default ?? mod};
}

jest.mock('../web/MarkdownTextInput.css', () => ({}));
jest.mock('react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle', () =>
  mockWithDefault(jest.requireActual('react-native-web/dist/cjs/exports/StyleSheet/compiler/createReactDOMStyle')),
);
jest.mock('react-native-web/dist/exports/StyleSheet/preprocess', () => mockWithDefault(jest.requireActual('react-native-web/dist/cjs/exports/StyleSheet/preprocess')));
jest.mock('react-native-web/dist/modules/setValueForStyles/dangerousStyleValue', () =>
  mockWithDefault(jest.requireActual('react-native-web/dist/cjs/modules/setValueForStyles/dangerousStyleValue')),
);

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
// jsdom does not implement scrollIntoView, which the input calls on focus.
Element.prototype.scrollIntoView = jest.fn();

const VALUE = 'one\n\ntwo\n\nthree';

function getTextNode(container: HTMLElement, text: string): Text {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.textContent === text) {
      return node as Text;
    }
    node = walker.nextNode();
  }
  throw new Error(`Text node "${text}" not found`);
}

function setDOMSelection(startNode: Text, startOffset: number, endNode: Text, endOffset: number, {notify}: {notify: boolean}) {
  const range = document.createRange();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  if (notify) {
    // Browsers queue `selectionchange`, which React turns into the input's `onSelect`.
    act(() => {
      document.dispatchEvent(new Event('selectionchange'));
    });
  }
}

function dispatchClipboardEvent(target: HTMLElement, type: 'copy' | 'cut') {
  const setData = jest.fn();
  const event = new Event(type, {bubbles: true, cancelable: true});
  Object.defineProperty(event, 'clipboardData', {value: {setData, getData: () => ''}});
  act(() => {
    target.dispatchEvent(event);
  });
  return {event, setData};
}

describe('MarkdownTextInput web copy', () => {
  let container: HTMLDivElement;
  let root: Root;
  let input: HTMLElement;
  let onSelectionChange: jest.Mock;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    onSelectionChange = jest.fn();
    act(() => {
      root.render(
        <MarkdownTextInput
          multiline
          value={VALUE}
          parser={parseExpensiMark}
          onSelectionChange={onSelectionChange}
        />,
      );
    });
    input = container.querySelector('[contenteditable]') as HTMLElement;
    // jsdom does not implement the `contentEditable` property, which React checks before it emits `onSelect` for an element.
    Object.defineProperty(input, 'contentEditable', {value: 'true'});
    act(() => {
      input.focus();
    });

    // The cached selection holds a caret at the end of "one", as it would after the user clicks there.
    const one = getTextNode(input, 'one');
    setDOMSelection(one, 3, one, 3, {notify: true});
    expect(onSelectionChange).toHaveBeenLastCalledWith(expect.objectContaining({nativeEvent: expect.objectContaining({selection: {start: 3, end: 3}})}));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it('copies the selection that is already reflected in the cached selection', () => {
    setDOMSelection(getTextNode(input, 'two'), 0, getTextNode(input, 'three'), 'three'.length, {notify: true});

    const {event, setData} = dispatchClipboardEvent(input, 'copy');

    expect(event.defaultPrevented).toBe(true);
    expect(setData).toHaveBeenCalledWith('text/plain', 'two\n\nthree');
  });

  it('copies the current DOM selection when the copy runs before the select event updates the cache', () => {
    setDOMSelection(getTextNode(input, 'two'), 0, getTextNode(input, 'three'), 'three'.length, {notify: false});

    const {event, setData} = dispatchClipboardEvent(input, 'copy');

    expect(event.defaultPrevented).toBe(true);
    expect(setData).toHaveBeenCalledWith('text/plain', 'two\n\nthree');
  });

  it('cuts the current DOM selection when the cut runs before the select event updates the cache', () => {
    const execCommand = jest.fn(() => true);
    document.execCommand = execCommand;
    setDOMSelection(getTextNode(input, 'two'), 0, getTextNode(input, 'three'), 'three'.length, {notify: false});

    const {event, setData} = dispatchClipboardEvent(input, 'cut');

    expect(event.defaultPrevented).toBe(true);
    expect(setData).toHaveBeenCalledWith('text/plain', 'two\n\nthree');
    expect(execCommand).toHaveBeenCalledWith('delete');
  });

  it('leaves the native copy alone when nothing is selected', () => {
    const two = getTextNode(input, 'two');
    setDOMSelection(two, 1, two, 1, {notify: false});

    const {event, setData} = dispatchClipboardEvent(input, 'copy');

    expect(event.defaultPrevented).toBe(false);
    expect(setData).not.toHaveBeenCalled();
  });
});
