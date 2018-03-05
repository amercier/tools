import React, { Component } from 'react';
import './App.css';


function encode(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

function decode(value) {
  return decodeURIComponent(value.replace(/\+/g, ' '));
}

class App extends Component {
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
        <h1>URL Encoder/Decoder</h1>
        <textarea value={input} onChange={e => this.onInputChange(e)}></textarea>
        <button onClick={() => this.onEncodeButtonClick()} disabled={input === ''}>Encode</button>
        <button onClick={() => this.onDecodeButtonClick()} disabled={input === decode(input)}>Decode</button>
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

export default App;
