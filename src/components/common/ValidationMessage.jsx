import React from 'react';
import { Typography } from 'rmwc/Typography';
import { bool, string } from './prop-types';

const ValidationMessage = ({ success, message }) => {
  const icon = success ? 'check' : 'error';
  const theme = success ? 'primary' : null;
  const styles = {
    message: {
      color: success ? 'var(--mdc-theme-primary, #6200ee)' : '#b00020',
      fontWeight: 500,
    },
    icon: {
      verticalAlign: 'middle',
      marginRight: '0.2em',
      marginBottom: '4px',
    },
  };

  return (
    <Typography use="body1" theme={theme} style={styles.message}>
      <i className="material-icons" style={styles.icon}>
        {icon}
      </i>
      {message}
    </Typography>
  );
};

ValidationMessage.propTypes = {
  success: bool.isRequired,
  message: string.isRequired,
};

export default ValidationMessage;
