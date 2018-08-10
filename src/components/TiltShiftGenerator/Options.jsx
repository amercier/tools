/* eslint-disable react/jsx-one-expression-per-line */
// TODO Remove exception after ESLint 5 upgrade

import React from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import LabeledSlider from '../common/LabeledSlider';
import {
  bool, number, func, node,
} from '../common/prop-types';

const SliderCell = ({ children, ...props }) => (
  <GridCell span="4">
    <LabeledSlider {...props}>
      {children}
    </LabeledSlider>
  </GridCell>
);
SliderCell.propTypes = {
  children: node.isRequired,
};

const Options = ({
  disabled,
  onOptionChange,
  blur, distance, maxDistance, perspective, position, vignetting, zoom,
}) => {
  function onInput(name) {
    return value => onOptionChange(name, value);
  }

  const gridStyle = {
    '--mdc-layout-grid-gutter-desktop': '0 24px',
    '--mdc-layout-grid-gutter-tablet': '0 16px',
    '--mdc-layout-grid-gutter-phone': '0 16px',
  };
  const labelProps = {
    min: 0,
    step: 1,
    disabled,
    discrete: true,
    labelWidth: 10,
    minWidth: 8,
    style: {
      margin: '0 0.5rem',
    },
  };
  return (
    <Grid style={gridStyle}>
      <SliderCell value={position} onInput={onInput('position')} max={100} {...labelProps}>
        Position ({position}%)
      </SliderCell>
      <SliderCell value={blur} onInput={onInput('blur')} max={200} {...labelProps}>
        Blur ({blur}px)
      </SliderCell>
      <SliderCell value={distance} onInput={onInput('distance')} max={maxDistance} {...labelProps}>
        Distance ({distance}px)
      </SliderCell>
      <SliderCell value={perspective} onInput={onInput('perspective')} max={100} {...labelProps}>
        Perspective ({perspective}%)
      </SliderCell>
      <SliderCell value={zoom} onInput={onInput('zoom')} max={100} {...labelProps}>
        Zoom ({zoom}%)
      </SliderCell>
      <SliderCell value={vignetting} onInput={onInput('vignetting')} max={100} {...labelProps}>
        Vignetting ({vignetting}%)
      </SliderCell>
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

  onOptionChange: func.isRequired,
};

export default Options;
