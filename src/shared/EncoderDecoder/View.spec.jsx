import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      input=""
      onInputChange={noop}
      onEncode={noop}
      onDecode={noop}
      isEncodeDisabled={false}
      isDecodeDisabled={false}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
