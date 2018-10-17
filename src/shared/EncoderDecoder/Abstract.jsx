import React, { Component } from 'react';
import View from './View';

export default class Base64EncoderDecoder extends Component {
  static encode() {
    throw new Error('static encode() is not implemented');
  }

  static decode() {
    throw new Error('static decode() is not implemented');
  }

  state = {
    input: '',
  };

  onInputChange = ({ target }) => {
    this.setState({ input: target.value });
  };

  get isEncodeDisabled() {
    const { input } = this.state;
    return input === '';
  }

  get isDecodeDisabled() {
    const { input } = this.state;
    return input === '' || this.constructor.decode(input) === null;
  }

  encode = () => {
    const { input } = this.state;
    this.setState({ input: this.constructor.encode(input) });
  };

  decode = () => {
    const { input } = this.state;
    this.setState({ input: this.constructor.decode(input) });
  };

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        onInputChange={this.onInputChange}
        onEncode={this.encode}
        onDecode={this.decode}
        isEncodeDisabled={this.isEncodeDisabled}
        isDecodeDisabled={this.isDecodeDisabled}
      />
    );
  }
}
