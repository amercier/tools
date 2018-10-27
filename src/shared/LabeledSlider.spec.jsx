// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import LabeledSlider from './LabeledSlider';
import { noop } from '../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabeledSlider name="test" label="Test" value={0} onChange={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
