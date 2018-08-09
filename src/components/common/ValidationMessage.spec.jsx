import React from 'react';
import ReactDOM from 'react-dom';
import ValidationMessage from './ValidationMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ValidationMessage success message="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
