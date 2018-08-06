import React from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import { string, func, bool } from './prop-types';

const EncoderDecoderView = ({
  input, onInputChange, onEncode, onDecode, isDecodeDisabled, isEncodeDisabled,
}) => (
  <div>
    <TextField textarea fullwidth label="Text to encode or decode" rows="10" onChange={onInputChange} value={input} />
    <div className="tool-toolbar">
      <Button raised onClick={onEncode} disabled={isEncodeDisabled}>
        Encode
      </Button>
      <Button raised onClick={onDecode} disabled={isDecodeDisabled} theme="secondary-bg on-secondary">
        Decode
      </Button>
    </div>
  </div>
);

EncoderDecoderView.propTypes = {
  input: string.isRequired,
  onInputChange: func.isRequired,
  onEncode: func.isRequired,
  onDecode: func.isRequired,
  isEncodeDisabled: bool.isRequired,
  isDecodeDisabled: bool.isRequired,
};

export default EncoderDecoderView;
