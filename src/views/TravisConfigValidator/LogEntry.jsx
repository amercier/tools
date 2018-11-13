import React from 'react';
import { string, object } from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styledBy = (property, mapping) => props => mapping[props[property]];

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
  color: styledBy('level', {
    error: '#b00020',
    warn: '#ff8f00',
    info: '#0336ff',
  }),
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
