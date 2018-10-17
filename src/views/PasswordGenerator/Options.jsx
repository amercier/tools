// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LabeledSlider from '../../shared/LabeledSlider';
import NamedSwitch from '../../shared/NamedSwitch';
import { minLength, maxLength } from './config';

type Props = {
  classes: Object,
  length: number,
  numbers: boolean,
  symbols: boolean,
  uppercase: boolean,
  excludeSimilar: boolean,
  onChange: () => void,
};

const styles = () => ({
  switchGroup: {
    justifyContent: 'space-evenly',
  },
  sliderLabel: {
    minWidth: '5.5em',
  },
});

const Options = ({ onChange, length, classes, ...switches }: Props) => (
  <div>
    <LabeledSlider
      label={`Length (${length})`}
      name="length"
      value={length}
      min={minLength}
      max={maxLength}
      step={1}
      onChange={onChange}
      classes={{ label: classes.sliderLabel }}
    />

    <FormGroup row className={classes.switchGroup}>
      {Object.entries(switches).map(([name, checked]) => (
        <FormControlLabel
          key={`password-generator-switch-${name}`}
          label={
            {
              numbers: 'Numbers',
              symbols: 'Symbols',
              uppercase: 'Uppercase characters',
              excludeSimilar: 'Exclude similar characters',
            }[name]
          }
          control={<NamedSwitch {...{ name, checked, onChange }} />}
        />
      ))}
    </FormGroup>
  </div>
);

export default withStyles(styles)(Options);
