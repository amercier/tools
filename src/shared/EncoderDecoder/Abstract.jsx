// @flow

import * as React from 'react';
import View from './View';

type State = {
  input: string,
};

export default class AbstractEncoderDecoder extends React.Component<{}, State> {
  static encode: (input: string) => string;

  static decode: (input: string) => string;

  state = {
    input: '',
  };

  onInputChange = ({ target }: { target: Object }) => {
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
