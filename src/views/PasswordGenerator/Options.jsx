// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LabeledSlider from '../../shared/LabeledSlider';
import NamedSwitch from '../../shared/NamedSwitch';
import { minLength, maxLength } from './config';

type Props = {|
  classes: Object,
  length: number,
  numbers: boolean,
  symbols: boolean,
  uppercase: boolean,
  excludeSimilar: boolean,
  onChange: () => void,
|};

const styles = () => ({
  switchGroup: {
    justifyContent: 'space-evenly',
  },
  sliderLabel: {
    minWidth: '5.5em',
  },
});

const Options = ({
  onChange,
  length,
  classes,
  numbers,
  symbols,
  uppercase,
  excludeSimilar,
}: Props) => (
  <div>
    <LabeledSlider
      name="length"
      label={`Length (${length})`}
      value={length}
      min={minLength}
      max={maxLength}
      step={1}
      onChange={onChange}
      classes={{ label: classes.sliderLabel }}
    />

    <FormGroup row className={classes.switchGroup}>
      <FormControlLabel
        label="Numbers"
        control={<NamedSwitch name="numbers" checked={numbers} onChange={onChange} />}
      />
      <FormControlLabel
        label="Symbols"
        control={<NamedSwitch name="symbols" checked={symbols} onChange={onChange} />}
      />
      <FormControlLabel
        label="Uppercase characters"
        control={<NamedSwitch name="uppercase" checked={uppercase} onChange={onChange} />}
      />
      <FormControlLabel
        label="Exclude similar characters"
        control={<NamedSwitch name="excludeSimilar" checked={excludeSimilar} onChange={onChange} />}
      />
    </FormGroup>
  </div>
);

export default withStyles(styles)(Options);
