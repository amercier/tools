// @flow

import * as React from 'react';

import CopyToClipboard from './CopyToClipboard';
import Notification from './Notification';
import Options from './Options';
import Password from './Password';

type Props = {|
  RenderOptions: typeof Options,
  RenderPassword: typeof Password,
  RenderCopyToClipboard: typeof CopyToClipboard,
  RenderNotification: typeof Notification,

  password: string | null,
  copied: boolean,
  showCopyMessage: boolean,
  length: number,
  numbers: boolean,
  symbols: boolean,
  uppercase: boolean,
  excludeSimilar: boolean,

  onPasswordUpdateRequested: () => void,
  onCopy: () => void,
  onCopyMessageClose: () => void,
  onOptionChange: (name: string, value: boolean | number) => void,
|};

const View = ({
  RenderOptions,
  RenderPassword,
  RenderCopyToClipboard,
  RenderNotification,
  password,
  onPasswordUpdateRequested,
  onCopy,
  copied,
  showCopyMessage,
  onCopyMessageClose,
  onOptionChange,
  ...optionsProps
}: Props) => (
  <div className="password-generator">
    <RenderOptions onChange={onOptionChange} {...optionsProps} />
    <RenderPassword password={password} onPasswordUpdateRequested={onPasswordUpdateRequested} />
    <RenderCopyToClipboard password={password} copied={copied} onCopy={onCopy} />
    <RenderNotification showCopyMessage={showCopyMessage} onClose={onCopyMessageClose} />
  </div>
);

View.defaultProps = {
  RenderOptions: Options,
  RenderPassword: Password,
  RenderCopyToClipboard: CopyToClipboard,
  RenderNotification: Notification,
};

export default View;
