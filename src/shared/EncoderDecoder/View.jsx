// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

type Props = {|
  input: string,
  isDecodeDisabled: boolean,
  isEncodeDisabled: boolean,
  onInputChange: (value: string) => void,
  onEncode: () => void,
  onDecode: () => void,
  classes: Object,
|};

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
  input,
  onInputChange,
  onEncode,
  onDecode,
  isDecodeDisabled,
  isEncodeDisabled,
  classes,
}: Props) {
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
        onChange={({ target }: { target: HTMLInputElement }) => onInputChange(target.value)}
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

export default withStyles(styles)(EncoderDecoderView);
