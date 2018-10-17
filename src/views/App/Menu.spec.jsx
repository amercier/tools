import * as React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Menu
      modules={[]}
      mobileOpen={false}
      desktopOpen={false}
      onMobileDrawerToggle={noop}
      onDesktopDrawerToggle={noop}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
