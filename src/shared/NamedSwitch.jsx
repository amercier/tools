// @flow

import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import { namedEventTargetProperty } from '../lib/dom';

type Props = {
  name: string,
  onChange: (name: string, checked: boolean) => void,
};

const NamedSwitch = ({ name, onChange, ...props }: Props) => (
  <Switch onChange={namedEventTargetProperty(name, onChange, 'checked')} {...props} />
);

export default NamedSwitch;
