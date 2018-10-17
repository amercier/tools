// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

type Props = {
  success: boolean,
  message: string,
  classes: Object,
};

const styles = ({ spacing }) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '1rem',
    height: 4 * spacing.unit,
    marginLeft: 2 * spacing.unit,
  },
  icon: {
    marginRight: spacing.unit,
  },
});

const ValidationMessage = ({ success, message, classes }: Props) => {
  const icon = success ? 'check' : 'error';
  const color = success ? 'primary' : 'error';
  return (
    <Typography color={color} variant="body1" component="span" className={classes.root}>
      <Icon className={classes.icon}>{icon}</Icon>
      {message}
    </Typography>
  );
};

export default withStyles(styles)(ValidationMessage);
