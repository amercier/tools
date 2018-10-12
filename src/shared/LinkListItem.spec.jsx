import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LinkListItem from './LinkListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <LinkListItem to="">
        <span />
      </LinkListItem>
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
