// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  downloadUrl?: string,
};

const Toolbar = ({ downloadUrl }: Props) => (
  <div style={{ margin: '1rem 0', textAlign: 'right' }}>
    <a href={downloadUrl} download="tilt-shift">
      <Button variant="contained" color="primary" disabled={!downloadUrl}>
        Download
      </Button>
    </a>
  </div>
);

Toolbar.defaultProps = {
  downloadUrl: undefined,
};

export default Toolbar;
