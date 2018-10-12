import React from 'react';
import { number, bool, object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LabeledSlider from '../../shared/LabeledSlider';
import NamedSwitch from '../../shared/NamedSwitch';
import { minLength, maxLength } from './config';

const styles = () => ({
  switchGroup: {
    justifyContent: 'space-evenly',
  },
  sliderLabel: {
    minWidth: '5.5em',
  },
});

const Options = ({ classes, onChange, length, ...switches }) => (
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
      {(Object.entries(switches).map(([name, checked]) => (
        <FormControlLabel
          key={`password-generator-switch-${name}`}
          label={{
            numbers: 'Numbers',
            symbols: 'Symbols',
            uppercase: 'Uppercase characters',
            excludeSimilar: 'Exclude similar characters',
          }[name]}
          control={<NamedSwitch {...{ name, checked, onChange }} />}
        />
      )))}
    </FormGroup>
  </div>
);

Options.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  length: number.isRequired,
  numbers: bool.isRequired,
  symbols: bool.isRequired,
  uppercase: bool.isRequired,
  excludeSimilar: bool.isRequired,
  onChange: func.isRequired,
};

export default withStyles(styles)(Options);
