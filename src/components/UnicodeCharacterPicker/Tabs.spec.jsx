import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tabs activeTabIndex={0} charactersMap={[]} onChange={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
