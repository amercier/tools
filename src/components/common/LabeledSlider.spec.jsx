import React from 'react';
import ReactDOM from 'react-dom';
import LabeledSlider from './LabeledSlider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <LabeledSlider>
      Test
    </LabeledSlider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
