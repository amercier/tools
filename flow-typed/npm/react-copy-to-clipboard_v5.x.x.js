// flow-typed signature: 6ce9012bb80bd47dcf5e93a6df83eb0a
// flow-typed version: 5b66f9f650/react-copy-to-clipboard_v5.x.x/flow_>=v0.25.x

// @flow

declare module 'react-copy-to-clipboard' {
  declare export type CopyToClipboardOptions = {
    debug: boolean,
    message: string
  };

  declare export type CopyToClipboardProps = {
    text: string,
    onCopy?: (text: string, result: boolean) => void,
    options?: CopyToClipboardOptions,
    children?: React$Node
  };

  declare export default class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
}
