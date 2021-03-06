import React from 'react';
import ReactDOM from 'react-dom';
import Password from './Password';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Password password="" onPasswordUpdateRequested={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
