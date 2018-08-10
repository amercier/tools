import isUrl from 'is-url';
import React from 'react';
import { Button } from 'rmwc/Button';
import { Select } from 'rmwc/Select';
import { TextField } from 'rmwc/TextField';
import { string, func, arrayOf } from 'prop-types';
import { eventTargetProperty } from '../../lib/dom';

const Toolbar = ({
  url, resolution, resolutions, blobUrl, filename,
  onUrlChange, onResolutionChange, onGo,
}) => {
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
  return (
    <div className="website-screenshot-toolbar" style={styles.container}>
      <div style={styles.group1}>
        <TextField label="Website URL" onChange={eventTargetProperty(onUrlChange)} value={url} className="mdc-text-field--grow" />
      </div>

      <div style={styles.group2}>
        <div>
          <Select
            value={resolution}
            options={resolutions.map(value => ({ value, label: value }))}
            onChange={eventTargetProperty(onResolutionChange)}
            label="Resolution"
          />
        </div>
        <div>
          <Button raised disabled={!isUrl(url)} onClick={onGo} style={styles.buttons}>
            Go
          </Button>
          <a href={blobUrl} download={filename} style={styles.buttons}>
            <Button disabled={!blobUrl}>
              Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  url: string.isRequired,
  resolution: string.isRequired,
  resolutions: arrayOf(string).isRequired,
  blobUrl: string,
  filename: string,
  onUrlChange: func.isRequired,
  onResolutionChange: func.isRequired,
  onGo: func.isRequired,
};

Toolbar.defaultProps = {
  blobUrl: null,
  filename: null,
};

export default Toolbar;