import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Panel modules={[]}>{[]}</Panel>, div);
  ReactDOM.unmountComponentAtNode(div);
});
