import React from 'react';
import ReactDOM from 'react-dom';
import Textarea from './Textarea';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Textarea value="" disabled onChange={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
