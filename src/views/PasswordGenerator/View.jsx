import React from 'react';
import { bool, number, string, func } from 'prop-types';

const View = ({
  RenderOptions, RenderPassword, RenderCopyToClipboard,
  password, updatePassword, onCopy, copied, ...optionsProps
}) => (
  <div className="password-generator">
    <RenderOptions {...optionsProps} />
    <RenderPassword password={password} updatePassword={updatePassword} />
    <RenderCopyToClipboard password={password} copied={copied} onCopy={onCopy} />
  </div>
);

View.propTypes = {
  RenderOptions: func.isRequired,
  RenderPassword: func.isRequired,
  RenderCopyToClipboard: func.isRequired,

  password: string.isRequired,
  updatePassword: func.isRequired,
  onCopy: func.isRequired,
  copied: bool.isRequired,

  length: number.isRequired,
  numbers: bool.isRequired,
  symbols: bool.isRequired,
  uppercase: bool.isRequired,
  excludeSimilarCharacters: bool.isRequired,
  onOptionChange: func.isRequired,
};

export default View;
