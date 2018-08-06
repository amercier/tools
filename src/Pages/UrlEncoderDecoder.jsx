import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

export function encode(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

export function decode(value) {
  try {
    return decodeURIComponent(value.replace(/\+/g, ' '));
  } catch (e) {
    return value;
  }
}

export default class UrlEncoderDecoder extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };

    this.onEncodeButtonClick = this.onEncodeButtonClick.bind(this);
    this.onDecodeButtonClick = this.onDecodeButtonClick.bind(this);
  }

  onInputChange({ target }) {
    this.setState({ input: target.value });
  }

  onEncodeButtonClick() {
    const { input } = this.state;
    this.setState({ input: encode(input) });
  }

  onDecodeButtonClick() {
    const { input } = this.state;
    this.setState({ input: decode(input) });
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <TextField textarea fullwidth label="Text to encode or decode" rows="12" onChange={e => this.onInputChange(e)} value={input} />
        <div className="tool-toolbar">
          <Button raised disabled={input === ''} onClick={this.onEncodeButtonClick}>
            Encode
          </Button>
          <Button unelevated disabled={input === decode(input)} onClick={this.onDecodeButtonClick}>
            Decode
          </Button>
        </div>
      </div>
    );
  }
}
