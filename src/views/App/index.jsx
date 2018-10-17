import React from 'react';
import { modules, defaultTheme } from '../config';

import View from './View';

class App extends React.Component {
  state = {
    desktopOpen: false,
    mobileOpen: false,
  };

  handleMobileDrawerToggle = () => {
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
  };

  handleDesktopDrawerToggle = () => {
    this.setState(prevState => ({ desktopOpen: !prevState.desktopOpen }));
  };

  render() {
    return (
      <View
        {...{ modules, defaultTheme }}
        onMobileDrawerToggle={this.handleMobileDrawerToggle}
        onDesktopDrawerToggle={this.handleDesktopDrawerToggle}
        {...this.state}
      />
    );
  }
}

export default App;
