import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

export function base64EncodeUnicode(value) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(value).replace(
      /%([0-9A-F]{2})/g,
      (match, p1) => String.fromCharCode(`0x${p1}`),
    ),
  );
}

export function base64DecodeUnicode(value) {
  try {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(value)
        .split('')
        .map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join(''),
    );
  } catch (e) {
    return null;
  }
}

export default class Base64EncoderDecoder extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange({ target }) {
    this.setState({ input: target.value });
  }

  onEncodeButtonClick() {
    const { input } = this.state;
    this.setState({ input: base64EncodeUnicode(input) });
  }

  onDecodeButtonClick() {
    const { input } = this.state;
    this.setState({ input: base64DecodeUnicode(input) });
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <TextField textarea fullwidth label="Text to encode or decode" rows="12" onChange={e => this.onInputChange(e)} value={input} />
        <div className="tool-toolbar">
          <Button raised onClick={() => this.onEncodeButtonClick()} disabled={input === ''}>
            Encode
          </Button>
          <Button unelevated onClick={() => this.onDecodeButtonClick()} disabled={input === '' || base64DecodeUnicode(input) === null}>
            Decode
          </Button>
        </div>
      </div>
    );
  }
}
