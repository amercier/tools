// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type Props = {
  char?: string,
  classes: Object,
};

const styles = ({ palette, spacing, shape }) => ({
  root: {
    background: palette.background.default,
    width: spacing.unit * 6,
    height: spacing.unit * 4,
    display: 'inline-block',
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '1.3rem',
    borderRadius: shape.borderRadius,
    textAlign: 'center',
    verticalAlign: 'center',
  },
});

const Kbd = ({ char, classes }: Props) => (
  <Typography color="primary" component="kbd" className={classes.root}>
    {char}
  </Typography>
);

Kbd.defaultProps = {
  char: undefined,
};

export default withStyles(styles)(Kbd);
