// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import TravisConfigValidator from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TravisConfigValidator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
