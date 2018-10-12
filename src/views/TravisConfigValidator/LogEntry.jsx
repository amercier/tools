import React from 'react';
import { string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const logIcons = {
  info: 'info',
  warn: 'warning',
  error: 'error',
  default: 'message',
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

const LogEntry = ({ level, message, classes }) => (
  <Typography className={classes.root}>
    <Icon className={`${classes.icon} ${classes[`${level}Icon`] || ''}`}>
      {logIcons[level] || logIcons.default}
    </Icon>
    {level}
    {message}
  </Typography>
);

LogEntry.propTypes = {
  level: string.isRequired,
  message: string.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(LogEntry);
