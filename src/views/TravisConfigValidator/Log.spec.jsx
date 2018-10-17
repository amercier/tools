// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Log from './Log';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Log RenderEntry={Noop} messages={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
