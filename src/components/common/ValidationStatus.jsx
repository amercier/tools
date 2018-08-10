import React from 'react';
import Spinner from './Spinner';
import ValidationMessage from './ValidationMessage';
import { bool, string } from '../../lib/prop-types';

const ValidationStatus = ({ loading, success, message }) => {
  if (loading) {
    return <Spinner />;
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
