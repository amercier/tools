// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';

type Props = {|
  password: string,
  onPasswordUpdateRequested: () => void,
  classes: Object,
|};

const styles = ({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 6 * spacing.unit,
    marginBottom: 6 * spacing.unit,
    justifyContent: 'center',
  },
  password: {
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '1.2rem',
  },
  button: {
    marginLeft: 2 * spacing.unit,
  },
});

const Password = ({ password, onPasswordUpdateRequested, classes }: Props) => (
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

export default withStyles(styles)(Password);
