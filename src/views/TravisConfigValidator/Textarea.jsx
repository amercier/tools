import React from 'react';
import { TextField } from 'rmwc/TextField';
import { bool, number, string, func, oneOfType } from 'prop-types';
import { auto } from '../../lib/lang';

const Textarea = ({
  value, rows, minRows, maxRows, onChange, ...props
}) => {
  const onValueChange = ({ target }) => onChange(target.value);
  const actualRows = auto(rows, minRows, maxRows)(value.split(/\n/).length);
  const style = {
    fontFamily: 'monospace',
    lineHeight: 1.2,
  };
  return (
    <TextField
      textarea
      fullwidth
      label="Paste .travis.yml here"
      value={value}
      rows={actualRows}
      style={style}
      onChange={onValueChange}
      {...props}
    />
  );
};

Textarea.propTypes = {
  value: string.isRequired,
  disabled: bool.isRequired,
  onChange: func.isRequired,
  rows: oneOfType([number, string]),
  minRows: number,
  maxRows: number,
};

Textarea.defaultProps = {
  rows: 'auto',
  minRows: 1,
  maxRows: +Infinity,
};

export default Textarea;
