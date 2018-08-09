import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Theme from './Theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <Route>
        <Theme modules={[]} />
      </Route>
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
