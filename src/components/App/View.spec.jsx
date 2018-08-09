import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../common/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <View
      RenderTheme={Noop}
      RenderHeader={Noop}
      RenderBody={Noop}
      onMenuToggle={noop}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
