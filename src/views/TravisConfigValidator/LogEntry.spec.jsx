// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import LogEntry from './LogEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogEntry level="message" message="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
