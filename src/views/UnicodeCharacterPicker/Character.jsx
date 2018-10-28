import React from 'react';
import { string, func, object } from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { monospaceFontFamily } from '../config';

const styles = ({ spacing }) => ({
  root: {
    height: 7 * spacing.unit,
    width: 7 * spacing.unit,
    margin: spacing.unit / 2,
    fontFamily: monospaceFontFamily,
    fontSize: '1.8rem',
    lineHeight: 1,
  },
});

const Character = ({ character, onCopy, classes }) => (
  <CopyToClipboard text={character} onCopy={onCopy}>
    <IconButton className={classes.root} color="inherit">
      {character}
    </IconButton>
  </CopyToClipboard>
);

Character.propTypes = {
  character: string.isRequired,
  onCopy: func.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Character);
