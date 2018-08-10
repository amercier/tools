import React from 'react';
import { Slider as RmwcSlider } from 'rmwc/Slider';
import { func } from 'prop-types';
import { noop } from '../lib/lang';
import { eventDetailProperty } from '../lib/dom';

const Slider = ({ onInput, onChange, ...props }) => (
  <RmwcSlider
    onInput={eventDetailProperty(onInput)}
    onChange={eventDetailProperty(onChange)}
    {...props}
  />
);

Slider.propTypes = {
  onInput: func,
  onChange: func,
};

Slider.defaultProps = {
  onInput: noop,
  onChange: noop,
};

export default Slider;
