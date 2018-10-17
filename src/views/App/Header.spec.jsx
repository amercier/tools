import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { noop } from '../../lib/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Header
        title=""
        mobileOpen={false}
        desktopOpen={false}
        onMobileDrawerToggle={noop}
        onDesktopDrawerToggle={noop}
      />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
