// @flow

import classNames from 'classnames';
import * as React from 'react';
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
import type { Module } from '../config';
import { drawerWidth } from './config';

type Props = {
  mobileOpen: boolean,
  desktopOpen: boolean,
  modules: Module[],
  onMobileDrawerToggle: () => void,
  onDesktopDrawerToggle: () => void,
  children: React.Node,
  theme: Object,
  classes: Object,
};

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
}: Props) => {
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

export default withStyles(styles, { withTheme: true })(Menu);
