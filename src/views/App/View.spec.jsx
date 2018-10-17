import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

import { defaultTheme } from '../config';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      modules={[]}
      defaultTheme={defaultTheme}
      mobileOpen={false}
      desktopOpen={false}
      onMobileDrawerToggle={noop}
      onDesktopDrawerToggle={noop}
      RenderHeader={Noop}
      RenderMenu={Noop}
      RenderHome={Noop}
      RenderTheme={Noop}
      RenderPage={Noop}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
