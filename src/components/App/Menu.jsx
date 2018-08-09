import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import {
  bool, string, func, arrayOf, shape,
} from '../common/prop-types';

import './Menu.scss';

const Menu = ({
  RenderMenuItem,
  isNarrow, isMenuOpen, modules,
  onMenuClose, onMenuClick,
}) => {
  const RenderMenuItemWithRouter = withRouter(
    ({ match, ...props }) => <RenderMenuItem active={!!match} {...props} />,
  );
  return (
    <Drawer
      persistent={!isNarrow}
      temporary={isNarrow}
      open={isMenuOpen}
      onClose={onMenuClose}
    >
      <DrawerContent>
        {modules.map(module => (
          <Route key={`menu-route-${module.id}`} exact path={`/${module.id}`}>
            <RenderMenuItemWithRouter module={module} onClick={onMenuClick} />
          </Route>
        ))}
      </DrawerContent>
    </Drawer>
  );
};

Menu.propTypes = {
  RenderMenuItem: func.isRequired,

  isNarrow: bool.isRequired,
  isMenuOpen: bool.isRequired,
  modules: arrayOf(shape({
    id: string,
    title: string,
    description: string,
  })).isRequired,

  onMenuClose: func.isRequired,
  onMenuClick: func.isRequired,
};

export default Menu;
