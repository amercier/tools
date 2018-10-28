import React from 'react';
import { bool, number, func, string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LabeledSlider from '../../shared/LabeledSlider';

const styles = () => ({
  sliderLabel: {
    minWidth: '10em',
  },
});

const Options = ({ disabled, maxDistance, onChange, classes, ...values }) => {
  const labelProps = {
    step: 1,
    disabled,
    onChange,
    classes: {
      label: classes.sliderLabel,
    },
  };

  const GridItem = ({ name, label, unit, beta, ...props }) => (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
      <LabeledSlider
        name={name}
        value={values[name]}
        label={
          <span>
            {label}
            {beta && <sup>beta</sup>} ({values[name]}
            {unit})
          </span>
        }
        {...props}
      />
    </Grid>
  );
  GridItem.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    unit: string.isRequired,
    beta: bool,
  };
  GridItem.defaultProps = {
    beta: false,
  };

  return (
    <Grid container spacing={24} alignItems="stretch">
      <GridItem name="position" label="Position" unit="%" {...labelProps} />
      <GridItem name="blur" label="Blur" unit="px" {...labelProps} max={200} />
      <GridItem name="distance" label="Distance" unit="px" {...labelProps} max={maxDistance} />
      <GridItem name="perspective" label="Perspective" unit="%" beta {...labelProps} />
      <GridItem name="zoom" label="Zoom" unit="%" {...labelProps} />
      <GridItem name="vignetting" label="Vignetting" unit="%" beta {...labelProps} />
    </Grid>
  );
};

Options.propTypes = {
  disabled: bool.isRequired,

  blur: number.isRequired,
  distance: number.isRequired,
  maxDistance: number.isRequired,
  perspective: number.isRequired,
  position: number.isRequired,
  vignetting: number.isRequired,
  zoom: number.isRequired,

  onChange: func.isRequired,

  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Options);
