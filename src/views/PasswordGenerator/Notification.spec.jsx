import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification showCopyMessage onClose={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
