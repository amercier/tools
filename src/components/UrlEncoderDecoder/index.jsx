import React, { Component } from 'react';
import { urlEncode, urlDecode } from './url';

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
    const decoded = urlDecode(input);
    return input === '' || decoded === null || decoded === input;
  }

  encode = () => {
    const { input } = this.state;
    this.setState({ input: urlEncode(input) });
  }

  decode = () => {
    const { input } = this.state;
    this.setState({ input: urlDecode(input) });
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
