import React from 'react';
import { Button } from 'rmwc/Button';
import { noop } from '../lib/lang';
import {
  bool, string, func, node,
} from '../lib/prop-types';

const ActionBar = ({
  children,
  primary, primaryDisabled, onPrimaryClick,
  secondary, secondaryDisabled, onSecondaryClick,
}) => {
  const styles = {
    container: {
      marginTop: '2rem',
      textAlign: 'right',
    },
    button: {
      marginLeft: '1rem',
    },
  };

  const primaryButton = primary && (
    <Button raised disabled={primaryDisabled} onClick={onPrimaryClick} style={styles.button}>
      {primary}
    </Button>
  );
  const secondaryButton = secondary && (
    <Button disabled={secondaryDisabled} onClick={onSecondaryClick} style={styles.button}>
      {secondary}
    </Button>
  );

  return (
    <div style={styles.container}>
      {children}
      {primaryButton}
      {secondaryButton}
    </div>
  );
};

ActionBar.propTypes = {
  children: node,
  primary: string,
  primaryDisabled: bool,
  onPrimaryClick: func,
  secondary: string,
  secondaryDisabled: bool,
  onSecondaryClick: func,
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

export default ActionBar;
