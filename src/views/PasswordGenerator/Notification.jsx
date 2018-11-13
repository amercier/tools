import React from 'react';
import { bool, func, object } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const Notification = ({ showCopyMessage, onClose, classes }) => (
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

Notification.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  showCopyMessage: bool.isRequired,
  onClose: func.isRequired,
};

export default withStyles(styles)(Notification);
