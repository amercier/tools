// @flow

import React from 'react';
import Switch from '@material-ui/core/Switch';

type Props = {|
  name: string,
  checked: boolean,
  onChange: (name: string, checked: boolean) => void,
|};

const NamedSwitch = ({ name, onChange, ...props }: Props) => (
  <Switch onChange={({ target }) => onChange(name, target.checked)} {...props} />
);

export default NamedSwitch;
