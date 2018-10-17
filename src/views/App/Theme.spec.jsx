import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Theme from './Theme';

import { defaultTheme } from '../config';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Route>
        <Theme modules={[]} defaultTheme={defaultTheme}>
          <div />
        </Theme>
      </Route>
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
