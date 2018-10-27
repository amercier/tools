import React from 'react';
import { bool, number, string, func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { between } from '../../lib/math';

const styles = {
  input: {
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '0.8rem',
    lineHeight: 1.2,
  },
};

const Textarea = ({ value, rows, minRows, maxRows, onChange, classes, ...props }) => (
  // TODO: add outlined text field once available
  // See https://github.com/mui-org/material-ui/issues/11962
  <TextField
    multiline
    fullWidth
    label="Paste .travis.yml here"
    rows={between(minRows, maxRows)(value.split(/\n/).length)}
    value={value}
    onChange={event => onChange(event.target.value)}
    inputProps={{ className: classes.input }}
    {...props}
  />
);

Textarea.propTypes = {
  value: string.isRequired,
  disabled: bool.isRequired,
  onChange: func.isRequired,
  minRows: number,
  maxRows: number,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Textarea.defaultProps = {
  minRows: 1,
  maxRows: +Infinity,
};

export default withStyles(styles)(Textarea);
