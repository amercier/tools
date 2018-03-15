import { generate as generatePassword } from 'generate-password';
import React, { Component } from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Slider } from 'rmwc/Slider';
import { Switch } from 'rmwc/Switch';
import { Typography } from 'rmwc/Typography';
import CopyToClipboard from 'react-copy-to-clipboard';

import './PasswordGenerator.css';

export default class PasswordGenerator extends Component {
  constructor() {
    super();
    this.state = {
      length: 32,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true,
      copied: false,
    };
    this.state.password = this.getPassword();
  }

  render() {
    return (
      <div className="password-generator">
        <div className="password-generator-slider">
          <Slider
            min={4}
            max={64}
            step={1}
            value={this.state.length}
            onInput={e => this.setState({ length: e.target.value })}
            onChange={() => this.regeneratePassword()}
            discrete
          />
          {this.state.length}
        </div>

        <div className="password-generator-switches">
          <Switch checked={this.state.numbers} onChange={e => { this.setState({ numbers: e.target.checked }); this.regeneratePassword(); }}> Numbers</Switch>
          <Switch checked={this.state.symbols} onChange={e => { this.setState({ symbols: e.target.checked }); this.regeneratePassword(); }}> Symbols</Switch>
          <Switch checked={this.state.uppercase} onChange={e => { this.setState({ uppercase: e.target.checked }); this.regeneratePassword(); }}> Uppercase characters</Switch>
          <Switch checked={this.state.excludeSimilarCharacters} onChange={e => { this.setState({ excludeSimilarCharacters: e.target.checked }); this.regeneratePassword(); }}> Exclude similar characters</Switch>
        </div>

        <div className="password-generator-password">
          <pre className="password-generator-password__password">{this.state.password}</pre>
          <Button compact onClick={() => this.regeneratePassword()}><ButtonIcon use="refresh" /></Button>
          <div></div>
        </div>

        <CopyToClipboard text={this.state.password} onCopy={() => this.onCopy()}>
          <div className="password-generator-clipboard">
            <Button unelevated className="password-generator-button">Copy to clipboard</Button>
            <Typography use="body1" className="password-generator-clipboard__copied">{this.state.copied ? 'Copied!' : null}</Typography>
          </div>
        </CopyToClipboard>
      </div>
    );
  }

  regeneratePassword() {
    this.setState({
      password: this.getPassword(),
      copied: false
    });
  }

  getPassword() {
    const { length, numbers, symbols, uppercase, excludeSimilarCharacters } = this.state;
    const strict = true;
    const password = generatePassword({ length, numbers, symbols, uppercase, excludeSimilarCharacters, strict });
    return password;
  }

  onCopy() {
    this.setState({ copied: true });
  }
}
