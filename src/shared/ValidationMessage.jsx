import React from 'react';
import { bool, string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

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

const ValidationMessage = ({ success, message, classes }) => {
  const icon = success ? 'check' : 'error';
  const color = success ? 'primary' : 'error';
  return (
    <Typography color={color} variant="body2" component="span" className={classes.root}>
      <Icon className={classes.icon}>
        {icon}
      </Icon>
      {message}
    </Typography>
  );
};

ValidationMessage.propTypes = {
  success: bool.isRequired,
  message: string.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(ValidationMessage);
