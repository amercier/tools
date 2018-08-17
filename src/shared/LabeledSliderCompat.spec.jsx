import React from 'react';
import ReactDOM from 'react-dom';
import LabeledSliderCompat from './LabeledSliderCompat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <LabeledSliderCompat>
      Test
    </LabeledSliderCompat>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
