import React from 'react';
import { string, func } from 'prop-types';
import Switch from '@material-ui/core/Switch';

const NamedSwitch = ({ name, onChange, ...props }) => (
  <Switch onChange={({ target }) => onChange(name, target.checked)} {...props} />
);

NamedSwitch.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
};

export default NamedSwitch;
