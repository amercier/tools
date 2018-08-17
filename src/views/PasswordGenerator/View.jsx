import React from 'react';
import { bool, number, string, func } from 'prop-types';

const View = ({
  RenderOptions, RenderPassword, RenderCopyToClipboard, RenderNotification,
  password, onPasswordUpdateRequested, onCopy, copied, showCopyMessage, onCopyMessageClose,
  onOptionChange, ...optionsProps
}) => (
  <div className="password-generator">
    <RenderOptions onChange={onOptionChange} {...optionsProps} />
    <RenderPassword password={password} onPasswordUpdateRequested={onPasswordUpdateRequested} />
    <RenderCopyToClipboard password={password} copied={copied} onCopy={onCopy} />
    <RenderNotification showCopyMessage={showCopyMessage} onClose={onCopyMessageClose} />
  </div>
);

View.propTypes = {
  RenderOptions: func.isRequired,
  RenderPassword: func.isRequired,
  RenderCopyToClipboard: func.isRequired,
  RenderNotification: func.isRequired,

  password: string.isRequired,
  onPasswordUpdateRequested: func.isRequired,
  onCopy: func.isRequired,
  copied: bool.isRequired,
  showCopyMessage: bool.isRequired,
  onCopyMessageClose: func.isRequired,

  length: number.isRequired,
  numbers: bool.isRequired,
  symbols: bool.isRequired,
  uppercase: bool.isRequired,
  excludeSimilar: bool.isRequired,
  onOptionChange: func.isRequired,
};

export default View;
