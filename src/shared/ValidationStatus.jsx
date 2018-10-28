import React from 'react';
import { bool, string } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ValidationMessage from './ValidationMessage';

const ValidationStatus = ({ loading, success, message }) => {
  if (loading) {
    return <CircularProgress size={24} />;
  }
  if (!message) {
    return null;
  }
  return <ValidationMessage success={success} message={message} />;
};

ValidationStatus.propTypes = {
  loading: bool,
  success: bool,
  message: string,
};

ValidationStatus.defaultProps = {
  loading: false,
  message: null,
  success: false,
};

export default ValidationStatus;
