// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Textarea from './Textarea';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Textarea value="" disabled onChange={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
