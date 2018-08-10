import React from 'react';
import Copy from 'react-copy-to-clipboard';
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import { bool, string, func } from 'prop-types';

const CopyToClipboard = ({ password, copied, onCopy }) => (
  <Copy text={password} onCopy={onCopy}>
    <div className="password-generator-clipboard">
      <Button raised className="password-generator-clipboard__button">
        Copy to clipboard
      </Button>
      <Typography use="body1" theme="secondary" className="password-generator-clipboard__copied">
        {copied ? 'Copied!' : null}
      </Typography>
    </div>
  </Copy>
);

CopyToClipboard.propTypes = {
  password: string.isRequired,
  copied: bool.isRequired,
  onCopy: func.isRequired,
};

export default CopyToClipboard;
