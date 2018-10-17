// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import TiltShiftGenerator from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TiltShiftGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
