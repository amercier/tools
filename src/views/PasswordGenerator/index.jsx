import { generate as generatePassword } from 'generate-password';
import React, { Component } from 'react';
import CopyToClipboard from './CopyToClipboard';
import Notifications from './Notifications';
import Options from './Options';
import Password from './Password';
import View from './View';

export default class PasswordGenerator extends Component {
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
  }

  static getDerivedStateFromProps(props, state) {
    if (state.password !== null) {
      return null;
    }
    const password = generatePassword(state);
    return { password };
  }

  handleOptionChange = (name, value) => {
    this.setState({ [name]: value });
    this.updatePassword();
  }

  handlePasswordUpdateRequested = () => {
    this.updatePassword();
  }

  handleCopyMessageClose = () => {
    this.setState({ showCopyMessage: false });
  }

  updatePassword() {
    this.setState({
      password: null,
      copied: false,
    });
  }

  render() {
    const {
      length, numbers, symbols, uppercase, excludeSimilar,
      password, copied, showCopyMessage,
    } = this.state;

    return (
      <View
        RenderOptions={Options}
        RenderPassword={Password}
        RenderCopyToClipboard={CopyToClipboard}
        RenderNotifications={Notifications}

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
