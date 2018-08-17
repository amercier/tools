import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';

const View = ({ modules, RenderPanel, RenderItem }) => (
  <RenderPanel>
    {modules.map(module => <RenderItem key={`home-item-${module.id}`} module={module} />)}
  </RenderPanel>
);

View.propTypes = {
  modules: arrayOf(shape({
    id: string,
    title: string,
    description: string,
  })).isRequired,
  RenderPanel: func.isRequired,
  RenderItem: func.isRequired,
};

export default View;
