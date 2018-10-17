import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      RenderOptions={Noop}
      RenderPassword={Noop}
      RenderCopyToClipboard={Noop}
      RenderNotification={Noop}
      password=""
      onPasswordUpdateRequested={noop}
      onCopy={noop}
      copied
      showCopyMessage
      onCopyMessageClose={noop}
      length={32}
      numbers
      symbols
      uppercase
      excludeSimilar
      onOptionChange={noop}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
