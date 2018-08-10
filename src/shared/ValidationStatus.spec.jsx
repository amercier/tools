import React from 'react';
import ReactDOM from 'react-dom';
import ValidationStatus from './ValidationStatus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ValidationStatus />, div);
  ReactDOM.unmountComponentAtNode(div);
});
