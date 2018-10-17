import React from 'react';
import { bool, string, func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const styles = ({ spacing }) => ({
  close: {
    width: spacing.unit * 4,
    height: spacing.unit * 4,
  },
  kbd: {
    marginLeft: spacing.unit,
  },
});

const Notification = ({ RenderKbd, copiedCharacter, closed, onClose, classes }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={copiedCharacter && !closed}
    autoHideDuration={2000}
    message={
      <span>
        Copied character
        {<RenderKbd char={copiedCharacter} classes={{ root: classes.kbd }} />}
      </span>
    }
    onClose={onClose}
    action={
      <IconButton aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    }
  />
);

Notification.propTypes = {
  RenderKbd: func.isRequired,
  copiedCharacter: string,
  closed: bool,
  onClose: func.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Notification.defaultProps = {
  copiedCharacter: null,
  closed: false,
};

export default withStyles(styles)(Notification);
