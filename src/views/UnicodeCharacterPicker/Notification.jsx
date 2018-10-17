// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Kbd from './Kbd';

type Props = {
  RenderKbd: typeof Kbd,
  copiedCharacter?: string,
  closed: boolean,
  onClose: () => void,
  classes: Object,
};

const styles = ({ spacing }) => ({
  close: {
    width: spacing.unit * 4,
    height: spacing.unit * 4,
  },
  kbd: {
    marginLeft: spacing.unit,
  },
});

const Notification = ({
  RenderKbd,
  copiedCharacter, closed, onClose, classes,
}: Props) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={copiedCharacter && !closed}
    autoHideDuration={2000}
    message={(
      <span>
        Copied character
        {<RenderKbd char={copiedCharacter} classes={{ root: classes.kbd }} />}
      </span>
    )}
    onClose={onClose}
    action={(
      <IconButton aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    )}
  />
);

Notification.defaultProps = {
  RenderKbd: Kbd,
  copiedCharacter: undefined,
  closed: false,
};

export default withStyles(styles)(Notification);
