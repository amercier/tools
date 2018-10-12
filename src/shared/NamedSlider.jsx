import React from 'react';
import { string, func } from 'prop-types';
import Slider from '@material-ui/lab/Slider';

const NamedSlider = ({ name, onChange, ...props }) => (
  <Slider onChange={(_, value) => onChange(name, value)} {...props} />
);

NamedSlider.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
};

export default NamedSlider;
