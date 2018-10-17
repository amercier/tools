// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LabeledSlider from '../../shared/LabeledSlider';

type GridItemProps = {
  children: React.Node,
  name: string,
  onChange: (name: string, value: number) => void,
};

type Props = {
  disabled: boolean,
  blur: number,
  distance: number,
  maxDistance: number,
  perspective: number,
  position: number,
  vignetting: number,
  zoom: number,
  onChange: (name: string, value: number) => void,
  classes: Object,
};

const GridItem = ({ children, ...props }: GridItemProps) => (
  <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
    <LabeledSlider label={children} {...props} />
  </Grid>
);
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
}: Props) => {
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
        Blur ({blur} px)
      </GridItem>
      <GridItem name="distance" value={distance} {...labelProps} max={maxDistance}>
        Distance ({distance} px)
      </GridItem>
      <GridItem name="perspective" value={perspective} {...labelProps}>
        Perspective ({perspective}
        %)
      </GridItem>
      <GridItem name="zoom" value={zoom} {...labelProps}>
        Zoom ({zoom}
        %)
        {beta}
      </GridItem>
      <GridItem name="vignetting" value={vignetting} {...labelProps}>
        Vignetting ({vignetting}
        %)
        {beta}
      </GridItem>
    </Grid>
  );
};

export default withStyles(styles)(Options);
