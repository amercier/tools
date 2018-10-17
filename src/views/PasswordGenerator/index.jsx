// @flow

import { generate as generatePassword } from 'generate-password';
import * as React from 'react';
import View from './View';

type State = {
  password: string | null,
  length: number,
  numbers: boolean,
  symbols: boolean,
  uppercase: boolean,
  excludeSimilar: boolean,
  copied: boolean,
  showCopyMessage: boolean,
};

export default class PasswordGenerator extends React.Component<{}, State> {
  state = {
    password: null,
    length: 32,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilar: true,
    copied: false,
    showCopyMessage: false,
  };

  onCopy = () => {
    this.setState({
      copied: true,
      showCopyMessage: true,
    });
  };

  static getDerivedStateFromProps(props: Object, state: Object) {
    if (state.password !== null) {
      return null;
    }
    const password = generatePassword(state);
    return { password };
  }

  handleOptionChange = (name: string, value: boolean | number) => {
    this.setState({ [name]: value });
    this.updatePassword();
  };

  handlePasswordUpdateRequested = () => {
    this.updatePassword();
  };

  handleCopyMessageClose = () => {
    this.setState({ showCopyMessage: false });
  };

  updatePassword() {
    this.setState({
      password: null,
      copied: false,
    });
  }

  render() {
    const {
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilar,
      password,
      copied,
      showCopyMessage,
    } = this.state;

    return (
      <View
        password={password}
        onPasswordUpdateRequested={this.handlePasswordUpdateRequested}
        copied={copied}
        onCopy={this.onCopy}
        showCopyMessage={showCopyMessage}
        onCopyMessageClose={this.handleCopyMessageClose}
        length={length}
        numbers={numbers}
        symbols={symbols}
        uppercase={uppercase}
        excludeSimilar={excludeSimilar}
        onOptionChange={this.handleOptionChange}
      />
    );
  }
}
