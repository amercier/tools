// @flow

import * as React from 'react';
import Slider from '@material-ui/lab/Slider';

type Props = {|
  name: string,
  className: string,
  onChange: (name: string, value: number) => void,
|};

const NamedSlider = ({ name, onChange, ...props }: Props) => (
  <Slider onChange={(_, value) => onChange(name, value)} {...props} />
);

export default NamedSlider;
