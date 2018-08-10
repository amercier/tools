import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItem module={{}} onClick={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
