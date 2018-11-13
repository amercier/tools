import React from 'react';
import { string, func, object } from 'prop-types';
import Copy from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  root: {
    textAlign: 'center',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const CopyToClipboard = ({ password, onCopy, classes }) => (
  <div className={classes.root}>
    <Copy text={password} onCopy={onCopy}>
      <Button variant="contained" color="primary" className={classes.button}>
        Copy to clipboard
      </Button>
    </Copy>
  </div>
);

CopyToClipboard.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  password: string.isRequired,
  onCopy: func.isRequired,
};

export default withStyles(styles)(CopyToClipboard);
