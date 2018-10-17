import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { bool, string, func, object } from 'prop-types';

const styles = theme => ({
  toolbar: {
    marginTop: 2 * theme.spacing.unit,
    textAlign: 'right',
  },
  button: {
    marginLeft: 2 * theme.spacing.unit,
  },
});

function EncoderDecoderView({
  classes,
  input,
  onInputChange,
  onEncode,
  onDecode,
  isDecodeDisabled,
  isEncodeDisabled,
}) {
  const { toolbar, button } = classes;
  const buttonProps = { variant: 'contained', className: button };
  // TODO: add outlined text field once available
  // See https://github.com/mui-org/material-ui/issues/11962
  return (
    <div>
      <TextField
        multiline
        fullWidth
        label="Text to encode or decode"
        value={input}
        onChange={onInputChange}
      />

      <div className={toolbar}>
        <Button color="primary" disabled={isEncodeDisabled} onClick={onEncode} {...buttonProps}>
          Encode
        </Button>
        <Button color="secondary" disabled={isDecodeDisabled} onClick={onDecode} {...buttonProps}>
          Decode
        </Button>
      </div>
    </div>
  );
}

EncoderDecoderView.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  input: string.isRequired,
  onInputChange: func.isRequired,
  onEncode: func.isRequired,
  onDecode: func.isRequired,
  isEncodeDisabled: bool.isRequired,
  isDecodeDisabled: bool.isRequired,
};

export default withStyles(styles)(EncoderDecoderView);
