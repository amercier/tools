import React from 'react';
import { Icon } from 'rmwc/Icon';
import { string } from 'prop-types';

const logIcons = {
  info: 'info',
  warn: 'warning',
  error: 'error',
  default: 'message',
};

const LogEntry = ({ level, message }) => {
  const styles = {
    container: {
      margin: '1rem 0',
      lineHeight: '1.4',
    },
    icon: {
      verticalAlign: 'middle',
      marginRight: '0.2em',
      marginBottom: '4px',
      color: {
        error: '#b00020',
        warning: '#ff8f00',
        info: '#0336ff',
      }[level] || 'inherit',
    },
  };

  return (
    <div style={styles.container}>
      <Icon strategy="ligature" style={styles.icon}>
        {logIcons[level] || logIcons.default}
      </Icon>
      {message}
    </div>
  );
};

LogEntry.propTypes = {
  level: string.isRequired,
  message: string.isRequired,
};

export default LogEntry;
