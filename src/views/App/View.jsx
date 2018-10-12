import React from 'react';
import { bool, string, func, arrayOf, shape, object } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Home from '../Home';

import Header from './Header';
import Menu from './Menu';
import Page from './Page';
import Theme from './Theme';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  },
  main: {
    padding: theme.spacing.unit * 4,
    flexGrow: 1,
    overflowY: 'auto',
  },
});

const View = ({
  modules,
  defaultTheme,
  mobileOpen,
  desktopOpen,
  onMobileDrawerToggle,
  onDesktopDrawerToggle,

  RenderHeader,
  RenderMenu,
  RenderHome,
  RenderTheme,
  RenderPage,

  classes,
}) => (
  <BrowserRouter>
    <RenderTheme modules={modules} defaultTheme={defaultTheme}>
      <div className={classes.root}>
        <RenderHeader
          title="Web Tools"
          onMobileDrawerToggle={onMobileDrawerToggle}
          onDesktopDrawerToggle={onDesktopDrawerToggle}
          {...{ mobileOpen, desktopOpen }}
        />
        <RenderMenu
          onMobileDrawerToggle={onMobileDrawerToggle}
          onDesktopDrawerToggle={onDesktopDrawerToggle}
          {...{ mobileOpen, desktopOpen, modules }}
        />

        <div className={classes.content}>
          <div className={classes.toolbar} />
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={RenderHome} />
              {modules.filter(r => r.component).map(module => (
                <Route key={`page-route-${module.id}`} exact path={`/${module.id}`}>
                  <RenderPage module={module} />
                </Route>
              ))}
            </Switch>
          </main>
        </div>
      </div>
    </RenderTheme>
  </BrowserRouter>
);

View.propTypes = {
  modules: arrayOf(shape({
    id: string.isRequired,
    icon: string.isRequired,
    title: string.isRequired,
    component: func,
  })).isRequired,
  defaultTheme: object.isRequired, // eslint-disable-line react/forbid-prop-types
  mobileOpen: bool.isRequired,
  desktopOpen: bool.isRequired,
  onMobileDrawerToggle: func.isRequired,
  onDesktopDrawerToggle: func.isRequired,
  RenderHeader: func,
  RenderMenu: func,
  RenderHome: func,
  RenderTheme: func,
  RenderPage: func,

  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

View.defaultProps = {
  RenderHeader: Header,
  RenderMenu: Menu,
  RenderHome: Home,
  RenderTheme: Theme,
  RenderPage: Page,
};

export default withStyles(styles)(View);
