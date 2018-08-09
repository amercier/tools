import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <Header title="" onMenuToggle={noop} />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
