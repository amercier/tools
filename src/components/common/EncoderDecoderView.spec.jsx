import React from 'react';
import ReactDOM from 'react-dom';
import EncoderDecoderView from './EncoderDecoderView';
import { noop } from './lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <EncoderDecoderView
      input=""
      onInputChange={noop}
      onEncode={noop}
      onDecode={noop}
      isEncodeDisabled={false}
      isDecodeDisabled={false}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
