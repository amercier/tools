/* eslint-disable react/jsx-one-expression-per-line */
// TODO Remove exception after ESLint 5 upgrade
import React from 'react';
import { bool, number, func, node, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LabeledSlider from '../../shared/LabeledSlider';

const GridItem = ({ children, ...props }) => (
  <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
    <LabeledSlider label={children} {...props} />
  </Grid>
);
GridItem.propTypes = {
  children: node.isRequired,
};

const styles = () => ({
  sliderLabel: {
    minWidth: '9em',
  },
});

const Options = ({
  disabled,
  onChange,
  blur,
  distance,
  maxDistance,
  perspective,
  position,
  vignetting,
  zoom,
  classes,
}) => {
  const labelProps = {
    step: 1,
    disabled,
    onChange,
    classes: {
      label: classes.sliderLabel,
    },
  };
  const beta = <sup>beta</sup>;

  return (
    <Grid container spacing={24} alignItems="stretch">
      <GridItem name="position" value={position} {...labelProps}>
        Position ({position}
        %)
      </GridItem>
      <GridItem name="blur" value={blur} {...labelProps} max={200}>
        Blur ({blur}
        px)
      </GridItem>
      <GridItem name="distance" value={distance} {...labelProps} max={maxDistance}>
        Distance ({distance}
        px)
      </GridItem>
      <GridItem name="perspective" value={perspective} {...labelProps}>
        Perspective ({perspective}
        %)
      </GridItem>
      <GridItem name="zoom" value={zoom} {...labelProps}>
        Zoom
        {beta} ({zoom}
        %)
      </GridItem>
      <GridItem name="vignetting" value={vignetting} {...labelProps}>
        Vignetting
        {beta} ({vignetting}
        %)
      </GridItem>
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
