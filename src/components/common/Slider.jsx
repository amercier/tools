import React from 'react';
import { Slider as RmwcSlider } from 'rmwc/Slider';
import { noop } from '../../lib/lang';
import { func } from '../../lib/prop-types';

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
