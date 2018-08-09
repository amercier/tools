import React, { Component } from 'react';
import { base64EncodeUnicode, base64DecodeUnicode } from './base64';

import EncoderDecoderView from '../common/EncoderDecoderView';

export default class Base64EncoderDecoder extends Component {
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
    return input === '' || base64DecodeUnicode(input) === null;
  }

  encode = () => {
    const { input } = this.state;
    this.setState({ input: base64EncodeUnicode(input) });
  }

  decode = () => {
    const { input } = this.state;
    this.setState({ input: base64DecodeUnicode(input) });
  }

  render() {
    return (
      <EncoderDecoderView
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
