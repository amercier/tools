import classNames from 'classnames';
import React from 'react';
import { bool, string, func, object, node, arrayOf, shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LinkListItem from '../../shared/LinkListItem';
import { drawerWidth } from './config';

const styles = ({ breakpoints, mixins, spacing, transitions }) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    width: spacing.unit * 7,
    [breakpoints.up('sm')]: {
      width: spacing.unit * 9,
    },
  },
});

const Menu = ({
  theme,
  classes,
  modules,
  mobileOpen,
  desktopOpen,
  onMobileDrawerToggle,
  onDesktopDrawerToggle,
}) => {
  const menuItems = (
    <List>
      {modules.map(module => (
        <LinkListItem key={`menu-item-${module.id}`} to={module.id} disabled={!module.component}>
          <ListItemIcon>
            <Icon>{module.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={module.title} />
        </LinkListItem>
      ))}
    </List>
  );

  return [
    <Hidden mdUp key="menu-mobile">
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={onMobileDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          {menuItems}
        </div>
      </Drawer>
    </Hidden>,
    <Hidden smDown key="menu-desktop">
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !desktopOpen && classes.drawerPaperClose),
        }}
        open={desktopOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={onDesktopDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {menuItems}
      </Drawer>
    </Hidden>,
  ];
};

Menu.propTypes = {
  mobileOpen: bool.isRequired,
  desktopOpen: bool.isRequired,
  onMobileDrawerToggle: func.isRequired,
  onDesktopDrawerToggle: func.isRequired,
  modules: arrayOf(
    shape({
      id: string.isRequired,
      icon: string.isRequired,
      title: string.isRequired,
      component: func,
    }),
  ).isRequired,
  children: node,
  theme: object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles, { withTheme: true })(Menu);
