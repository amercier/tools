import React from 'react';
import { string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const Kbd = ({ char, classes }) => (
  <Typography color="primary" component="kbd" className={classes.root}>
    {char}
  </Typography>
);

Kbd.propTypes = {
  char: string.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Kbd);
