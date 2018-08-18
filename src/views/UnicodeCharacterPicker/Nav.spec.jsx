import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav activeTabIndex={0} charactersMap={[]} onChange={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
