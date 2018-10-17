// @flow

import * as React from 'react';
import Log from './Log';
import View from './View';
import { TravisYmlValidator } from './validator';
import * as config from './config';

type State = {
  input: string,
  loading: boolean,
  success: boolean,
  status?: string,
  messages: config.Message[],
};

export default class TravisConfigValidator extends React.Component<{}, State> {
  validator = new TravisYmlValidator(config);

  state = {
    input: '',
    loading: false,
    success: false,
    status: undefined,
    messages: [],
  };

  handleInputChange = (input: string) => {
    this.setState({
      status: undefined,
      input,
    });
  };

  handleValidate = () => {
    this.setState({
      status: undefined,
      loading: true,
    });

    const { input } = this.state;
    this.validator.validate(input).then(({ success, error, messages }) =>
      this.setState({
        loading: false,
        success,
        status: success ? 'Valid!' : error,
        messages,
      }),
    );
  };

  render() {
    return (
      <View
        RenderLog={Log}
        onInputChange={this.handleInputChange}
        onValidate={this.handleValidate}
        {...this.props}
        {...this.state}
      />
    );
  }
}
