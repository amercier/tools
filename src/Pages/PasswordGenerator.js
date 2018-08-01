import { generate as generatePassword } from 'generate-password';
import React, { Component } from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Slider } from 'rmwc/Slider';
import { Switch } from 'rmwc/Switch';
import { Typography } from 'rmwc/Typography';
import CopyToClipboard from 'react-copy-to-clipboard';

import './PasswordGenerator.scss';

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
    this.state.password = generatePassword(this.state);
  }

  render() {
    return (
      <div className="password-generator">
        <div className="password-generator-slider">
          <span className="password-generator-slider__label">
            Length ({this.state.length})
          </span>
          <Slider
            min={4}
            max={64}
            step={1}
            value={this.state.length}
            onInput={e => this.setState({ length: e.target.value })}
            onChange={() => this.updatePassword()}
            discrete
          />
        </div>

        <div className="password-generator-switches">
          <Switch checked={this.state.numbers} onChange={e => this.updatePassword({ numbers: e.target.checked })}> Numbers</Switch>
          <Switch checked={this.state.symbols} onChange={e => this.updatePassword({ symbols: e.target.checked })}> Symbols</Switch>
          <Switch checked={this.state.uppercase} onChange={e => this.updatePassword({ uppercase: e.target.checked })}> Uppercase characters</Switch>
          <Switch checked={this.state.excludeSimilarCharacters} onChange={e => this.updatePassword({ excludeSimilarCharacters: e.target.checked })}> Exclude similar characters</Switch>
        </div>

        <div className="password-generator-password">
          <pre className="password-generator-password__password">{this.state.password}</pre>
          <Button onClick={() => this.updatePassword()}><ButtonIcon use="refresh" /></Button>
          <div></div>
        </div>

        <CopyToClipboard text={this.state.password} onCopy={() => this.onCopy()}>
          <div className="password-generator-clipboard">
            <Button unelevated className="password-generator-clipboard__button">Copy to clipboard</Button>
            <Typography use="body1" className="password-generator-clipboard__copied">{this.state.copied ? 'Copied!' : null}</Typography>
          </div>
        </CopyToClipboard>
      </div>
    );
  }

  updatePassword(newOptions = {}) {
    const allOptions = Object.assign({}, this.state, newOptions);
    const newState = Object.assign({}, allOptions, {
      password: generatePassword(allOptions),
      copied: false
    });
    this.setState(newState);
  }

  onCopy() {
    this.setState({ copied: true });
  }
}
