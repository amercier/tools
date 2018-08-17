import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notifications showCopyMessage onClose={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
