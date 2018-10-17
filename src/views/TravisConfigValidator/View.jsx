// @flow

import * as React from 'react';
import ActionBar from '../../shared/ActionBar';
import Log from './Log';
import Textarea from './Textarea';
import ValidationStatus from '../../shared/ValidationStatus';
import { textarea as textareaProps, type Message } from './config';

type Props = {
  RenderLog: typeof Log,
  input: string,
  loading: boolean,
  success: boolean,
  status?: string,
  messages: Message[],
  onInputChange: (value: string) => void,
  onValidate: () => void,
};

const View = ({
  RenderLog,
  input, onInputChange, onValidate, loading, success, status, messages,
}: Props) => (
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

View.defaultProps = {
  RenderLog: Log,
  status: undefined,
};

export default View;
