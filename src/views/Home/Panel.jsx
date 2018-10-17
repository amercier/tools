// @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { spacing, xs, sm, md, lg, xl } from './config';

type Props = {
  children: React.Node[],
};

const Panel = ({ children }: Props) => (
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

export default Panel;
