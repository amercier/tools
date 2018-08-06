import React, { Component } from 'react';
import { base64EncodeUnicode, base64DecodeUnicode } from './encoder';

export default class Base64EncoderDecoder extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  encode() {
    const { input } = this.state;
    this.setState({ input: base64EncodeUnicode(input) });
  }

  decode() {
    const { input } = this.state;
    this.setState({ input: base64DecodeUnicode(input) });
  }

  render() {
    return <div />;  // eslint-disable-line
  }
}
