import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Page from './Page';
import Theme from './Theme';
import View from './View';
import Home from '../Home';
import { modules } from '../config';

function isWindowNarrow({ innerWidth }) {
  return innerWidth < 1000;
}

class App extends Component {
  constructor() {
    super();
    const isNarrow = isWindowNarrow(window);
    this.state = {
      isNarrow,
      isMenuOpen: !isNarrow,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onMenuClick() {
    const { isNarrow } = this.state;
    if (isNarrow) {
      this.setState({ isMenuOpen: false });
    }
  }

  onWindowResize() {
    const { isNarrow } = this.state;
    if (isNarrow !== isWindowNarrow(window)) {
      this.setState({ isNarrow: !isNarrow });
    }
  }

  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    const { isNarrow, isMenuOpen } = this.state;
    return (
      <View
        RenderBody={Body}
        RenderHeader={Header}
        RenderMenu={Menu}
        RenderMenuItem={MenuItem}
        RenderPage={Page}
        RenderTheme={Theme}
        RenderView={View}
        RenderHome={Home}

        modules={modules}
        isNarrow={isNarrow}
        isMenuOpen={isMenuOpen}

        onMenuToggle={this.toggleMenu}
        onMenuClick={this.onMenuClick}
        onMenuClose={this.closeMenu}
      />
    );
  }
}

export default App;
