import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import { Typography } from 'rmwc/Typography';
import fetchPonyfill from 'fetch-ponyfill';

const { fetch, Headers } = fetchPonyfill();

const travisYmlParserUrl = 'https://travis-yml.herokuapp.com/v1/parse';
const travisYmlParserAuthUsername = '';
const travisYmlParserAuthPassword = 'abc123';

export function encode(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

export function decode(value) {
  return decodeURIComponent(value.replace(/\+/g, ' '));
}

export default class TravisConfigValidator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      loading: false,
      validationResponse: null,
    };
  }

  render() {
    const { input, loading, validationResponse } = this.state;
    const messageStyle = { fontWeight: 500 };
    const iconStyle = { verticalAlign: 'middle', marginRight: '0.2em', marginBottom: '4px'};

    let validationMessage;
    if (loading) {
      validationMessage = (
        <svg className="mdc-circular-progress mdc-circular-progress--small" viewBox="25 25 50 50">
          <circle className="mdc-circular-progress__path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      );
    } else if (validationResponse && validationResponse.error_message) {
      validationMessage = (
        <Typography use="body1" theme="secondary" style={messageStyle}>
          <i class="material-icons" style={iconStyle}>error</i>
          {validationResponse.error_message}
        </Typography>
      );
    } else if (validationResponse) { // OK
      validationMessage = (
        <Typography use="body1" theme="primary" style={messageStyle}>
          <i class="material-icons" style={iconStyle}>check</i>
          Valid!
        </Typography>
      );
    }

    const logIcons = { info: 'info', warn: 'warning', error: 'error' };
    const logs = validationResponse
      && validationResponse.full_messages
      && validationResponse.full_messages.length
      && validationResponse.full_messages.map((text, i) => {
        const icon = logIcons[validationResponse.messages[i].level] || 'message';
        return (
          <div>
            <i class="material-icons" style={iconStyle}>{icon}</i>
            {text}
          </div>
        );
      });

    return (
      <div>
        <TextField
          textarea
          fullwidth
          value={input}
          disabled={loading}
          label="Paste .travis.yml here"
          rows="12"
          onChange={e => this.onInputChange(e)}
        />
        <div className="tool-toolbar">
          {validationMessage}
          <Button raised onClick={() => this.onValidateButtonClick()} disabled={loading || validationResponse || input === ''}>Validate</Button>
        </div>
        {logs && (
          <Typography tag="div" use="body1" theme="text-secondary-on-light">
            <Typography tag="h3" use="headline4">Log</Typography>
            {logs}
          </Typography>
        )}
      </div>
    );
  }

  onInputChange({ target }) {
    this.setState({
      validationResponse: null,
      input: target.value,
    });
  }

  onValidateButtonClick() {
    this.setState({ loading: true });

    const headers = new Headers();
    const credentials = btoa(`${travisYmlParserAuthUsername}:${travisYmlParserAuthPassword}`);
    headers.set('Authorization', `Basic ${credentials}`);

    return fetch(travisYmlParserUrl, { method: 'POST', headers, body: this.state.input })
      .then(response => response.json())
      .catch(e => ({ error_message: `Error: ${e}`})) // Normalize HTTP errors
      .then(validationResponse => {
        this.setState({
          validationResponse,
          loading: false
        });
      });
  }
}
