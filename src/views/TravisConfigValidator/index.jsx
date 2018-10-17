import React, { Component } from 'react';
import Log from './Log';
import View from './View';
import { TravisYmlValidator } from './validator';
import * as config from './config';

export default class TravisConfigValidator extends Component {
  validator = new TravisYmlValidator(config);

  state = {
    input: '',
    loading: false,
    success: false,
    status: null,
    messages: [],
  };

  onInputChange = input => {
    this.setState({
      status: null,
      input,
    });
  };

  onValidate = () => {
    this.setState({
      status: null,
      loading: true,
    });

    const { input } = this.state;
    return this.validator.validate(input).then(({ success, error, messages }) =>
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
        onInputChange={this.onInputChange}
        onValidate={this.onValidate}
        {...this.props}
        {...this.state}
      />
    );
  }
}
