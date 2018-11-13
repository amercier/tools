import React from 'react';
import { string, func, object } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import { monospaceFontFamily } from '../config';

const styles = ({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 6 * spacing.unit,
    marginBottom: 6 * spacing.unit,
    justifyContent: 'center',
  },
  password: {
    fontFamily: monospaceFontFamily,
    fontSize: '1.2rem',
  },
  button: {
    marginLeft: 2 * spacing.unit,
  },
});

const Password = ({ password, onPasswordUpdateRequested, classes }) => (
  <div className={classes.root}>
    <Typography noWrap component="span" className={classes.password}>
      {password}
    </Typography>
    <Tooltip disableFocusListener title="Regenerate">
      <IconButton
        aria-label="Regenerate"
        variant="contained"
        color="secondary"
        onClick={onPasswordUpdateRequested}
        className={classes.button}
      >
        <RefreshIcon />
      </IconButton>
    </Tooltip>
    <div />
  </div>
);

Password.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  password: string.isRequired,
  onPasswordUpdateRequested: func.isRequired,
};

export default withStyles(styles)(Password);
