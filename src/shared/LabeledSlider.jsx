// @flow

import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import NamedSlider from './NamedSlider';

type Props = {
  label: React.Node,
  name: string,
  onChange: (name: string, value: number) => void,
  classes: Object,
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: 0,
  },
  label: {
    flexShrink: 0,
    marginRight: theme.spacing.unit,
  },
});

const LabeledSlider = ({ label, classes, ...props }: Props) => (
  <FormControlLabel
    classes={classes}
    label={label}
    labelPlacement="start"
    control={<NamedSlider className={classes.control} {...props} />}
  />
);

export default withStyles(styles)(LabeledSlider);
