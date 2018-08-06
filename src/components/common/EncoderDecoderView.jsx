import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

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
  input: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onEncode: PropTypes.func.isRequired,
  onDecode: PropTypes.func.isRequired,
  isEncodeDisabled: PropTypes.bool.isRequired,
  isDecodeDisabled: PropTypes.bool.isRequired,
};

export default EncoderDecoderView;
