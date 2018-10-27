// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

type Props = {|
  classes: Object,
  showCopyMessage: boolean,
  onClose: () => void,
|};

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const Notification = ({ showCopyMessage, onClose, classes }: Props) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={showCopyMessage}
    autoHideDuration={2000}
    message="✓ Copied!"
    onClose={onClose}
    action={
      <IconButton aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    }
  />
);

export default withStyles(styles)(Notification);
