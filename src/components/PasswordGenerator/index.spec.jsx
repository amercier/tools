import React from 'react';
import ReactDOM from 'react-dom';
import PasswordGenerator from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
