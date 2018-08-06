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

  onCopy() {
    this.setState({ copied: true });
  }

  updatePassword(newOptions = {}) {
    const allOptions = Object.assign({}, this.state, newOptions);
    const newState = Object.assign({}, allOptions, {
      password: generatePassword(allOptions),
      copied: false,
    });
    this.setState(newState);
  }

  renderSwitch(id, label, value) {
    return (
      <Switch
        checked={value}
        onChange={e => this.updatePassword({ [id]: e.target.checked })}
      >
        {label}
      </Switch>
    );
  }

  render() {
    const {
      length, numbers, symbols, uppercase, excludeSimilarCharacters, password, copied,
    } = this.state;

    return (
      <div className="password-generator">
        <div className="password-generator-slider">
          <span className="password-generator-slider__label">
            {/* TODO Remove exception after ESLint 5 upgrade */}
            Length ({length /* eslint-disable-line react/jsx-one-expression-per-line */})
          </span>
          <Slider
            min={4}
            max={64}
            step={1}
            value={length}
            discrete
            onInput={e => this.setState({ length: e.detail.value })}
            onChange={() => this.updatePassword()}
          />
        </div>

        <div className="password-generator-switches">
          {this.renderSwitch('numbers', 'Numbers', numbers)}
          {this.renderSwitch('symbols', 'Symbols', symbols)}
          {this.renderSwitch('uppercase', 'Uppercase characters', uppercase)}
          {this.renderSwitch('excludeSimilarCharacters', 'Exclude similar characters', excludeSimilarCharacters)}
        </div>

        <div className="password-generator-password">
          <pre className="password-generator-password__password">
            {password}
          </pre>
          <Button onClick={() => this.updatePassword()}>
            <ButtonIcon use="refresh" />
          </Button>
          <div />
        </div>

        <CopyToClipboard text={password} onCopy={() => this.onCopy()}>
          <div className="password-generator-clipboard">
            <Button unelevated className="password-generator-clipboard__button">
              Copy to clipboard
            </Button>
            <Typography use="body1" className="password-generator-clipboard__copied">
              {copied ? 'Copied!' : null}
            </Typography>
          </div>
        </CopyToClipboard>
      </div>
    );
  }
}
