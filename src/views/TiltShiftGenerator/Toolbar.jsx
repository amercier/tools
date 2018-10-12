import React from 'react';
import { string } from 'prop-types';
import Button from '@material-ui/core/Button';

const Toolbar = ({ downloadUrl }) => (
  <div style={{ margin: '1rem 0', textAlign: 'right' }}>
    <a href={downloadUrl} download="tilt-shift">
      <Button variant="contained" color="primary" disabled={!downloadUrl}>
        Download
      </Button>
    </a>
  </div>
);

Toolbar.propTypes = {
  downloadUrl: string,
};

Toolbar.defaultProps = {
  downloadUrl: null,
};

export default Toolbar;
