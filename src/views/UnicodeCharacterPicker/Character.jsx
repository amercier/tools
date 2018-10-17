// @flow

import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  character: string,
  onCopy: () => void,
  classes: Object,
};

const styles = ({ spacing }) => ({
  root: {
    height: 7 * spacing.unit,
    width: 7 * spacing.unit,
    margin: spacing.unit / 2,
    // TODO Set in theme
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSize: '1.8rem',
    lineHeight: 1,
  },
});

const Character = ({ character, onCopy, classes }: Props) => (
  <CopyToClipboard text={character} onCopy={onCopy}>
    <IconButton className={classes.root} color="inherit">
      {character}
    </IconButton>
  </CopyToClipboard>
);

export default withStyles(styles)(Character);
