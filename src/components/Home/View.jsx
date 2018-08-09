import React from 'react';
import { Grid } from 'rmwc/Grid';
import Cell from './Cell';
import { modules } from '../../config';

export default () => (
  <Grid className="home-tools-list">
    {modules.map(
      module => <Cell key={`cell-${module.id}`} module={module} />,
    )}
  </Grid>
);
