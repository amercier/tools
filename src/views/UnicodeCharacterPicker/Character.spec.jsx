// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Character character="" copied onCopy={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
