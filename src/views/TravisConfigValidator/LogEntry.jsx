// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { logIcons } from './config';

type Props = {
  level: string,
  message: string,
  classes: Object,
};

const styles = ({ spacing }) => ({
  root: {
    marginTop: spacing.unit,
    marginBottom: spacing.unit,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: spacing.unit,
  },
  // TODO: Use `level` prop once available
  // See https://github.com/mui-org/material-ui/issues/7633
  errorIcon: {
    color: '#b00020',
  },
  warnIcon: {
    color: '#ff8f00',
  },
  infoIcon: {
    color: '#0336ff',
  },
});

const LogEntry = ({ level, message, classes }: Props) => (
  <Typography className={classes.root}>
    <Icon className={`${classes.icon} ${classes[`${level}Icon`] || ''}`}>
      {logIcons[level] || logIcons.default}
    </Icon>
    {level}
    {message}
  </Typography>
);

export default withStyles(styles)(LogEntry);
