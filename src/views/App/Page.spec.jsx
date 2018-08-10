import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Page from './Page';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <Page module={{ component: Noop }} />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
