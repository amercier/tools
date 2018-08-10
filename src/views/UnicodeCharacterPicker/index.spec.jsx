import React from 'react';
import ReactDOM from 'react-dom';
import UnicodeCharacterPicker from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnicodeCharacterPicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
