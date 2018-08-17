import React from 'react';
import { node, arrayOf } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { spacing, xs, sm, md, lg, xl } from './config';

const Panel = ({ children }) => (
  <Grid container spacing={spacing} alignItems="stretch">
    {children.map((child, i) => (
      <Grid
        item
        key={`panel-item-${i}` /* eslint-disable-line react/no-array-index-key */}
        {...{ xs, sm, md, lg, xl }}
      >
        {child}
      </Grid>
    ))}
  </Grid>
);

Panel.propTypes = {
  children: arrayOf(node).isRequired,
};

export default Panel;
