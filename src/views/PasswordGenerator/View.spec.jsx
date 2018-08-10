import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <View
      RenderOptions={Noop}
      RenderPassword={Noop}
      RenderCopyToClipboard={Noop}
      password=""
      updatePassword={noop}
      onCopy={noop}
      copied
      length={32}
      numbers
      symbols
      uppercase
      excludeSimilarCharacters
      onOptionChange={noop}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
