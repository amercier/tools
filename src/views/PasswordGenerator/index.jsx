import { generate as generatePassword } from 'generate-password';
import React, { Component } from 'react';
import CopyToClipboard from './CopyToClipboard';
import Options from './Options';
import Password from './Password';
import View from './View';

import './index.scss';

export default class PasswordGenerator extends Component {
  state = {
    password: null,
    length: 32,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
    copied: false,
  };

  onCopy = () => {
    this.setState({ copied: true });
  }

  onOptionChange = (name, value, triggerUpdate) => {
    this.setState({ [name]: value });
    if (triggerUpdate) {
      this.updatePassword();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.password !== null) {
      return null;
    }
    const password = generatePassword(state);
    return { password };
  }

  updatePassword = () => {
    this.setState({
      password: null,
      copied: false,
    });
  }

  render() {
    const {
      length, numbers, symbols, uppercase, excludeSimilarCharacters, password, copied,
    } = this.state;

    return (
      <View
        RenderOptions={Options}
        RenderPassword={Password}
        RenderCopyToClipboard={CopyToClipboard}

        password={password}
        updatePassword={this.updatePassword}

        copied={copied}
        onCopy={this.onCopy}

        length={length}
        numbers={numbers}
        symbols={symbols}
        uppercase={uppercase}
        excludeSimilarCharacters={excludeSimilarCharacters}
        onOptionChange={this.onOptionChange}
      />
    );
  }
}
