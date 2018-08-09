import React from 'react';
import Typography from 'rmwc/Typography';
import Slider from './Slider';
import { implode } from './lang';
import namespace from './namespace';
import {
  bool, number, string, object, node, oneOfType, arrayOf,
} from './prop-types';

const baseClassName = `${namespace}-labeled-slider`;

const LabeledSlider = ({
  labelWidth, className, children, minWidth, disabled, style, ...props
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    label: {
      minWidth: `${labelWidth}em`,
    },
    slider: {
      flexGrow: 1,
      width: 'auto',
      minWidth: `${minWidth}em`,
      maxWidth: '100%',
    },
  };

  return (
    <div style={{ ...style, ...styles.container }} className={implode(' ', baseClassName, className)}>
      <Typography tag="span" use="body2" theme={disabled && 'text-disabled-on-background'} style={styles.label}>
        {children}
      </Typography>
      <Slider style={styles.slider} disabled={disabled} {...props} />
    </div>
  );
};

LabeledSlider.propTypes = {
  disabled: bool,
  style: object, // eslint-disable-line react/forbid-prop-types
  minWidth: number,
  labelWidth: number,
  className: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

LabeledSlider.defaultProps = {
  disabled: false,
  style: null,
  minWidth: 20,
  labelWidth: 10,
  className: '',
};

export default LabeledSlider;