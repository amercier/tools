import React from 'react';
import { Switch as RmwcSwitch } from 'rmwc/Switch';
import { func, node, oneOfType, arrayOf } from 'prop-types';
import { eventTargetProperty } from '../lib/dom';

const Switch = ({ onChange, children, ...props }) => (
  <RmwcSwitch onChange={eventTargetProperty(onChange)} {...props}>
    {children}
  </RmwcSwitch>
);

Switch.propTypes = {
  onChange: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Switch;
