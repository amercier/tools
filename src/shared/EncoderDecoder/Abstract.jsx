// @flow

import * as React from 'react';
import View from './View';

type State = {|
  input: string,
|};

export default class AbstractEncoderDecoder extends React.Component<{}, State> {
  static encode: (input: string) => string | null;

  static decode: (input: string) => string | null;

  state = {
    input: '',
  };

  get isEncodeDisabled(): boolean {
    const { input } = this.state;
    return input === '';
  }

  get isDecodeDisabled(): boolean {
    const { input } = this.state;
    return input === '' || this.constructor.decode(input) === null;
  }

  handleInputChange = (value: string) => {
    this.setState({ input: value });
  };

  handleEncode = () => {
    const { input } = this.state;
    this.setState({ input: this.constructor.encode(input) || '' });
  };

  handleDecode = () => {
    const { input } = this.state;
    this.setState({ input: this.constructor.decode(input) || '' });
  };

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        isEncodeDisabled={this.isEncodeDisabled}
        isDecodeDisabled={this.isDecodeDisabled}
        onEncode={this.handleEncode}
        onDecode={this.handleDecode}
        onInputChange={this.handleInputChange}
      />
    );
  }
}
