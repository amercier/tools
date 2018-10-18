// @flow

import * as React from 'react';
import Copy from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

type Props = {|
  password: string,
  onCopy: () => void,
  classes: Object,
|};

const styles = () => ({
  root: {
    textAlign: 'center',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const CopyToClipboard = ({ password, onCopy, classes }: Props) => (
  <div className={classes.root}>
    <Copy text={password} onCopy={onCopy}>
      <Button variant="contained" color="primary" className={classes.button}>
        Copy to clipboard
      </Button>
    </Copy>
  </div>
);

export default withStyles(styles)(CopyToClipboard);
