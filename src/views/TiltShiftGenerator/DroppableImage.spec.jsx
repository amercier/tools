import React from 'react';
import ReactDOM from 'react-dom';
import DroppableImage from './DroppableImage';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DroppableImage placeholder="" onDrop={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
