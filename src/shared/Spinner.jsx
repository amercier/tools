// @flow

import * as React from 'react';

type Props = {|
  size?: number,
  thickness?: number,
|};

const Spinner = ({ size, thickness }: Props) => {
  const styles = {
    svg: {
      position: 'relative',
      animation: 'rotate 2s linear infinite',
      verticalAlign: 'middle',
      width: `${+size}px`,
      height: `${+size}px`,
    },
    circle: {
      animation: 'dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite',
      strokeDasharray: '1, 200',
      strokeDashoffset: '0',
      strokeLinecap: 'round',
      stroke: 'var(--mdc-theme-primary)',
    },
  };

  return (
    <svg style={styles.svg} viewBox="25 25 50 50">
      <circle
        className="mdc-circular-progress__path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth={thickness}
        strokeMiterlimit="10"
        style={styles.circle}
      />
    </svg>
  );
};

Spinner.defaultProps = {
  size: 32,
  thickness: 5,
};

export default Spinner;
