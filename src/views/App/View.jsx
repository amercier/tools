// @flow

import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Home from '../Home';
import type { Module } from '../config';

import Header from './Header';
import Menu from './Menu';
import Page from './Page';
import Theme from './Theme';

type Props = {
  RenderHeader: typeof Header,
  RenderMenu: typeof Menu,
  RenderHome: typeof Home,
  RenderTheme: typeof Home,
  RenderPage: typeof Page,

  modules: Module[],
  defaultTheme: Object,
  mobileOpen: boolean,
  desktopOpen: boolean,
  onMobileDrawerToggle: () => void,
  onDesktopDrawerToggle: () => void,

  classes: Object,
};

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
}: Props) => (
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
              {modules.filter(m => m.component).map(module => (
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

View.defaultProps = {
  RenderHeader: Header,
  RenderMenu: Menu,
  RenderHome: Home,
  RenderTheme: Theme,
  RenderPage: Page,
};

export default withStyles(styles)(View);
