import React from 'react';
import { string, object } from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import NamedSlider from './NamedSlider';

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

const LabeledSlider = ({ label, classes, ...props }) => (
  <FormControlLabel
    classes={classes}
    label={label}
    labelPlacement="start"
    control={<NamedSlider className={classes.control} {...props} />}
  />
);

LabeledSlider.propTypes = {
  label: string.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(LabeledSlider);
