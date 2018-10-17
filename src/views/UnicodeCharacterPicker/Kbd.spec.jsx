// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Kbd from './Kbd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kbd char="a" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
