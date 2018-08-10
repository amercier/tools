import React from 'react';
import ReactDOM from 'react-dom';
import Switch from './Switch';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Switch onChange={noop}>
      Test
    </Switch>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
