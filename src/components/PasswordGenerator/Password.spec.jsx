import React from 'react';
import ReactDOM from 'react-dom';
import Password from './Password';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Password password="" updatePassword={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
