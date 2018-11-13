import React from 'react';
import { string, func, object, arrayOf } from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import isUrl from 'is-url';
import { eventTargetProperty } from '../../lib/dom';

const valueToMenuItem = (value, i) => (
  <MenuItem key={`menu-item-${i}`} value={value}>
    {value}
  </MenuItem>
);

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  group1: {
    flexGrow: 1000,
    margin: '0.5rem',
    minWidth: '18em',
  },
  group2: {
    flexGrow: 1,
    display: 'flex',
    margin: '0.5rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  buttons: {
    marginLeft: '1rem',
  },
};

const Toolbar = ({
  url,
  resolution,
  resolutions,
  blobUrl,
  filename,
  onUrlChange,
  onResolutionChange,
  onGo,
  classes,
}) => (
  <div className={classes.container}>
    <div className={classes.group1}>
      <TextField
        label="Website URL"
        onChange={eventTargetProperty(onUrlChange)}
        value={url}
        className={classes.url}
        fullWidth
      />
    </div>

    <div className={classes.group2}>
      <FormControl>
        <InputLabel htmlFor="resolution-helper">Resolution</InputLabel>
        <Select
          value={resolution}
          onChange={eventTargetProperty(onResolutionChange)}
          input={<Input name="resolution" id="resolution-helper" />}
        >
          {resolutions.map(valueToMenuItem)}
        </Select>
      </FormControl>
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={!isUrl(url)}
          onClick={onGo}
          className={classes.buttons}
        >
          Go
        </Button>
        <a href={blobUrl} download={filename} className={classes.buttons}>
          <Button disabled={!blobUrl}>Download</Button>
        </a>
      </div>
    </div>
  </div>
);

Toolbar.propTypes = {
  url: string.isRequired,
  resolution: string.isRequired,
  resolutions: arrayOf(string).isRequired,
  blobUrl: string,
  filename: string,
  onUrlChange: func.isRequired,
  onResolutionChange: func.isRequired,
  onGo: func.isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Toolbar.defaultProps = {
  blobUrl: null,
  filename: null,
};

export default withStyles(styles)(Toolbar);
