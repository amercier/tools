// @flow

import * as React from 'react';
import { type Module } from '../config';
import Panel from './Panel';
import Item from './Item';

type Props = {|
  modules: Module[],
  RenderPanel: typeof Panel,
  RenderItem: typeof Item,
|};

const View = ({ modules, RenderPanel, RenderItem }: Props) => (
  <RenderPanel>
    {modules.map(module => (
      <RenderItem key={`home-item-${module.id}`} module={module} />
    ))}
  </RenderPanel>
);

View.defaultProps = {
  RenderPanel: Panel,
  RenderItem: Item,
};

export default View;
