// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import ActionBar from './ActionBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
