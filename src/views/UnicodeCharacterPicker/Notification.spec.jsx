// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification RenderKbd={Noop} onClose={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
