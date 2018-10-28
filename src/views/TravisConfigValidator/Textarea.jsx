import React from 'react';
import { bool, number, string, func, object, oneOfType } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { auto } from '../../lib/lang';
import { eventTargetProperty } from '../../lib/dom';

const styles = {
  input: {
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '0.8rem',
    lineHeight: 1.2,
  },
};

const Textarea = ({ value, rows, minRows, maxRows, onChange, classes, ...props }) => (
  <TextField
    multiline
    fullWidth
    variant="outlined"
    label="Paste .travis.yml here"
    rows={auto(rows, minRows, maxRows)(value.split(/\n/).length)}
    value={value}
    onChange={eventTargetProperty(onChange)}
    inputProps={{ className: classes.input }}
    {...props}
  />
);

Textarea.propTypes = {
  value: string.isRequired,
  disabled: bool.isRequired,
  onChange: func.isRequired,
  rows: oneOfType([number, string]),
  minRows: number,
  maxRows: number,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Textarea.defaultProps = {
  rows: 'auto',
  minRows: 1,
  maxRows: +Infinity,
};

export default withStyles(styles)(Textarea);
