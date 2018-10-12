import React from 'react';
import { bool, string, func, node, object } from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { noop } from '../lib/lang';

const styles = ({ spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '2rem',
  },
  button: {
    marginLeft: 2 * spacing.unit,
  },
});

const ActionBar = ({
  children,
  primary, primaryDisabled, onPrimaryClick,
  secondary, secondaryDisabled, onSecondaryClick,
  classes,
}) => (
  <div className={classes.root}>
    {children}
    {primary && (
      <Button variant="contained" color="primary" disabled={primaryDisabled} onClick={onPrimaryClick} className={classes.button}>
        {primary}
      </Button>
    )}
    {secondary && (
      <Button disabled={secondaryDisabled} onClick={onSecondaryClick} className={classes.button}>
        {secondary}
      </Button>
    )}
  </div>
);

ActionBar.propTypes = {
  children: node,
  primary: string,
  primaryDisabled: bool,
  onPrimaryClick: func,
  secondary: string,
  secondaryDisabled: bool,
  onSecondaryClick: func,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

ActionBar.defaultProps = {
  children: null,
  primary: null,
  primaryDisabled: false,
  onPrimaryClick: noop,
  secondary: null,
  secondaryDisabled: false,
  onSecondaryClick: noop,
};

export default withStyles(styles)(ActionBar);
