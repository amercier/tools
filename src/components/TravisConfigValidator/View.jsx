import React from 'react';
import ActionBar from '../common/ActionBar';
import Textarea from './Textarea';
import ValidationStatus from '../common/ValidationStatus';
import {
  bool, string, func, arrayOf, shape,
} from '../common/prop-types';
import { textarea as textareaProps } from './config';

const View = ({
  RenderLog,
  input, onInputChange, onValidate, loading, success, status, messages,
}) => (
  <div>
    <Textarea
      value={input}
      disabled={loading}
      onChange={onInputChange}
      {...textareaProps}
    />

    <ActionBar
      primary="Validate"
      primaryDisabled={loading || status !== null || input === ''}
      onPrimaryClick={onValidate}
    >
      <ValidationStatus loading={loading} success={success} message={status} />
    </ActionBar>

    <RenderLog messages={messages} />
  </div>
);

View.propTypes = {
  RenderLog: func.isRequired,
  input: string.isRequired,
  onInputChange: func.isRequired,
  onValidate: func.isRequired,
  loading: bool.isRequired,
  success: bool.isRequired,
  status: string,
  messages: arrayOf(shape({
    level: string.isRequired,
    message: string.isRequired,
  })).isRequired,
};

View.defaultProps = {
  status: null,
};

export default View;
