import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

export function encode(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

export function decode(value) {
  return decodeURIComponent(value.replace(/\+/g, ' '));
}

export default class UrlEncoderDecoder extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <TextField textarea fullwidth label="Text to encode or decode" rows="12" onChange={e => this.onInputChange(e)} value={this.state.input} />
        <div className="tool-toolbar">
          <Button raised onClick={() => this.onEncodeButtonClick()} disabled={input === ''}>
Encode
          </Button>
          <Button unelevated onClick={() => this.onDecodeButtonClick()} disabled={input === decode(input)}>
Decode
          </Button>
        </div>
      </div>
    );
  }

  onInputChange({ target }) {
    this.setState({ input: target.value });
  }

  onEncodeButtonClick() {
    this.setState({ input: encode(this.state.input) });
  }

  onDecodeButtonClick() {
    this.setState({ input: decode(this.state.input) });
  }
}
