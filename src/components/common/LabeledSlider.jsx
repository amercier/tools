import React from 'react';
import Slider from './Slider';
import { implode, combinePrefixes } from './lang';
import namespace from './namespace';
import {
  number, string, node, oneOfType, arrayOf,
} from './prop-types';

const baseClassName = `${namespace}-labeled-slider`;

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  slider: {
    flexGrow: 1,
    width: 'auto',
    minWidth: '20em',
    maxWidth: '100%',
  },
};

const LabeledSlider = ({
  labelWidth, className, children, ...props
}) => (
  <div style={styles.container} className={implode(' ', baseClassName, className)}>
    <span style={{ minWidth: `${labelWidth}em` }} className={combinePrefixes([baseClassName, className], '__label')}>
      {children}
    </span>
    <Slider style={styles.slider} className={combinePrefixes([baseClassName, className], '__slider')} {...props} />
  </div>
);

LabeledSlider.propTypes = {
  labelWidth: number,
  className: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

LabeledSlider.defaultProps = {
  labelWidth: 10,
  className: '',
};

export default LabeledSlider;
