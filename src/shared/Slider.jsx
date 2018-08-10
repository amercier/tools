import React from 'react';
import { Slider as RmwcSlider } from 'rmwc/Slider';
import { func } from 'prop-types';
import { noop } from '../lib/lang';

const Slider = ({ onInput, onChange, ...props }) => {
  const onValueInput = ({ detail }) => onInput(detail.value);
  const onValueChange = ({ detail }) => onChange(detail.value);
  return <RmwcSlider onInput={onValueInput} onChange={onValueChange} {...props} />;
};

Slider.propTypes = {
  onInput: func,
  onChange: func,
};

Slider.defaultProps = {
  onInput: noop,
  onChange: noop,
};

export default Slider;
