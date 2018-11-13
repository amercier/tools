import classNames from 'classnames';
import React from 'react';
import { bool, string, func, object } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import GithubToolbarIcon from '../../shared/GithubToolbarIcon';
import { drawerWidth, githubUrl } from './config';

const styles = ({ breakpoints, mixins, spacing, transitions, zIndex }) => ({
  appBar: {
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    [breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitions.create(['width', 'margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  },
  hide: {
    display: 'none',
  },
  inactive: {
    pointerEvents: 'none',
  },
  menuButton: {
    marginLeft: spacing.unit,
    marginRight: spacing.unit,
  },
  title: Object.assign({}, mixins.toolbar, {
    flexGrow: 1,
    height: '100%',
  }),
  titleLink: Object.assign({}, mixins.toolbar, {
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
  }),
  titleButton: Object.assign({}, mixins.toolbar, {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    textTransform: 'inherit',
    paddingLeft: 2 * spacing.unit,
    paddingRight: 2 * spacing.unit,
    borderRadius: 0,
  }),
});

const Header = ({
  title,
  desktopOpen,
  mobileOpen,
  onMobileDrawerToggle,
  onDesktopDrawerToggle,
  location,
  classes,
}) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, desktopOpen && classes.appBarShift)}
  >
    <Toolbar disableGutters={!desktopOpen}>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onMobileDrawerToggle}
          className={classNames(classes.menuButton, mobileOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onDesktopDrawerToggle}
          className={classNames(classes.menuButton, desktopOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Typography
        variant="h6"
        color="inherit"
        component="h1"
        className={classNames(classes.title, location.pathname === '/' && classes.inactive)}
      >
        <Link to="/" className={classes.titleLink} tabIndex={-1}>
          <Tooltip title="Home page">
            <Button
              aria-label="Home"
              className={classes.titleButton}
              tabIndex={location.pathname === '/' ? -1 : 0}
            >
              {title}
            </Button>
          </Tooltip>
        </Link>
      </Typography>

      <Tooltip title="See the source on GitHub">
        <a
          href={githubUrl}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.titleLink}
          tabIndex={-1}
        >
          <IconButton color="inherit">
            <GithubToolbarIcon />
          </IconButton>
        </a>
      </Tooltip>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: string.isRequired,
  desktopOpen: bool.isRequired,
  mobileOpen: bool.isRequired,
  onMobileDrawerToggle: func.isRequired,
  onDesktopDrawerToggle: func.isRequired,
  location: object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(withRouter(Header));
