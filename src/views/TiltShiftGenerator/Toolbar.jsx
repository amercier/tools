import React from 'react';
import { Button } from 'rmwc/Button';
import { string } from 'prop-types';

const Toolbar = ({ downloadUrl }) => (
  <div style={{ margin: '1rem 0', textAlign: 'right' }}>
    <a href={downloadUrl} download="tilt-shift">
      <Button raised disabled={!downloadUrl}>
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
