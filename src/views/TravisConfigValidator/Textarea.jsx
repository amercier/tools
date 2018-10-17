// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { auto } from '../../lib/lang';
import { eventTargetProperty } from '../../lib/dom';

type Props = {
  value: string,
  disabled: boolean,
  rows: number | string,
  minRows: number,
  maxRows: number,
  onChange: (value: string) => void,
  classes: Object,
};

const styles = {
  input: {
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '0.8rem',
    lineHeight: 1.2,
  },
};

const Textarea = ({ value, rows, minRows, maxRows, onChange, classes, ...props }: Props) => (
  // TODO: add outlined text field once available
  // See https://github.com/mui-org/material-ui/issues/11962
  <TextField
    multiline
    fullWidth
    label="Paste .travis.yml here"
    rows={auto(rows, +minRows, +maxRows)(value.split(/\n/).length)}
    value={value}
    onChange={eventTargetProperty(onChange)}
    inputProps={{ className: classes.input }}
    {...props}
  />
);

Textarea.defaultProps = {
  rows: 'auto',
  minRows: 1,
  maxRows: +Infinity,
};

export default withStyles(styles)(Textarea);
