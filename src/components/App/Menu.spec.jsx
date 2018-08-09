import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { noop } from '../common/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Menu
      RenderMenuItem={Noop}
      isNarrow
      isMenuOpen
      modules={[]}
      onMenuClose={noop}
      onMenuClick={noop}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
