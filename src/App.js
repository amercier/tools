import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { SimpleListItem } from 'rmwc/List';
import { Theme } from 'rmwc/Theme';
import {
  Toolbar,
  ToolbarFixedAdjust,
  ToolbarMenuIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarIcon
} from 'rmwc/Toolbar';
import { Typography } from 'rmwc/Typography';

import './App.css';
import Home from './Home';
import pages from './Pages';

const LocationAwareTheme = withRouter(class extends Component {
  render() {
    const { match, location, history, staticContext, ...props } = this.props;
    return (<Theme {...props} data-path={location.pathname}/>);
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isMenuOpen: true,
    };
  }

  render() {
    return (
      <Router>
        <LocationAwareTheme className="app__root" tag="div">

          <Toolbar fixed waterfall>
            <ToolbarRow>
              <ToolbarSection alignStart>
                <ToolbarMenuIcon use="menu" onClick={() => this.toggleMenu()}/>
                <Link to={'/'}>
                  <ToolbarTitle>Web Development tools</ToolbarTitle>
                </Link>
              </ToolbarSection>
              <ToolbarSection alignEnd>
              <ToolbarIcon
                tag="a"
                href="https://github.com/amercier/tools"
                use={
                  <svg
                    style={{ width: '24px', height: '24px' }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="inherit"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                }
              />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          <ToolbarFixedAdjust />

          <div className="app__content">
            <Drawer
              persistent={!this.state.isMobile}
              temporary={this.state.isMobile}
              open={this.state.isMenuOpen}
              onClose={() => this.setState({ isMenuOpen: false })}
            >
              <DrawerContent twoLine>
                {pages.map(({ id, title, icon, component}) => {
                  if (component) {
                    // Inspired from NavLink implementation
                    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js
                    const path = `/${id}`.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
                    return (
                      <Route key={id} exact path={path} children={({ location, match }) => (
                        <Link to={id}>
                          <SimpleListItem graphic={icon} text={title} activated={match} />
                        </Link>
                      )} />
                    );
                  } else {
                    return (
                      <SimpleListItem key={id} graphic={icon} text={title}
                        secondaryText="Not available yet"
                        className="mdc-list-item--disabled"
                      />
                    );
                  }
                })}
              </DrawerContent>
            </Drawer>

            <main className="app__content-main">
              <Route exact path="/" component={Home}/>
              {pages.map(({ id, title, icon, component}) => {
                return component && (
                  <Route
                    key={id} exact path={`/${id}`}
                    render={() => (
                      <div>
                        <div className="app__content-title">
                          <Typography tag="h1" use="display1">{title}</Typography>
                          <Link to={'/'}>
                            <Button compact theme="background text-primary-on-background"><ButtonIcon use="close" /></Button>
                          </Link>
                        </div>
                        {React.createElement(component)}
                      </div>
                    )}
                  />
                );
              })}
            </main>
          </div>

        </LocationAwareTheme>
      </Router>
    );
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default App;
