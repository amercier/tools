import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import View from './View';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <View />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
