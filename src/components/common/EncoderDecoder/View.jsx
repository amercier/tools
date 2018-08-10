import React from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import { string, func, bool } from '../../../lib/prop-types';

const EncoderDecoderView = ({
  input, onInputChange, onEncode, onDecode, isDecodeDisabled, isEncodeDisabled,
}) => {
  const styles = {
    toolbar: {
      margin: '1rem 0',
      textAlign: 'right',
    },
    buttons: {
      marginLeft: '1rem',
    },
  };
  return (
    <div>
      <TextField textarea fullwidth label="Text to encode or decode" rows="10" onChange={onInputChange} value={input} />
      <div style={styles.toolbar}>
        <Button raised onClick={onEncode} disabled={isEncodeDisabled} style={styles.buttons}>
          Encode
        </Button>
        <Button raised onClick={onDecode} disabled={isDecodeDisabled} theme="secondary-bg on-secondary" style={styles.buttons}>
          Decode
        </Button>
      </div>
    </div>
  );
};

EncoderDecoderView.propTypes = {
  input: string.isRequired,
  onInputChange: func.isRequired,
  onEncode: func.isRequired,
  onDecode: func.isRequired,
  isEncodeDisabled: bool.isRequired,
  isDecodeDisabled: bool.isRequired,
};

export default EncoderDecoderView;
