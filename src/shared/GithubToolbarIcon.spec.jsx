// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import GithubToolbarIcon from './GithubToolbarIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubToolbarIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
