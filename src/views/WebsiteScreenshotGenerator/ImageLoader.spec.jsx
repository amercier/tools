// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from './ImageLoader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageLoader width={0} height={0} loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});
