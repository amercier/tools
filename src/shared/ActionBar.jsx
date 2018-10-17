// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { noop } from '../lib/lang';

type Props = {
  primary?: string,
  primaryDisabled?: boolean,
  onPrimaryClick?: () => any,
  secondary?: string,
  secondaryDisabled?: boolean,
  onSecondaryClick?: () => any,
  children?: React.Node,
  classes: Object,
};

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
  primary,
  primaryDisabled,
  onPrimaryClick,
  secondary,
  secondaryDisabled,
  onSecondaryClick,
  classes,
}) => (
  <div className={classes.root}>
    {children}
    {primary && (
      <Button
        variant="contained"
        color="primary"
        disabled={primaryDisabled}
        onClick={onPrimaryClick}
        className={classes.button}
      >
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
