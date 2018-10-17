// @flow

import * as React from 'react';
import Spinner from './Spinner';
import ValidationMessage from './ValidationMessage';

type Props = {
  loading?: boolean,
  success?: boolean,
  message?: string,
};

const ValidationStatus = ({ loading, success, message }: Props) => {
  if (loading) {
    return <Spinner />;
  }
  if (!message) {
    return null;
  }
  return <ValidationMessage success={success} message={message} />;
};

ValidationStatus.defaultProps = {
  loading: false,
  message: undefined,
  success: false,
};

export default ValidationStatus;
