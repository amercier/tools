import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import { noop } from '../common/lang';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Toolbar
      url=""
      resolution=""
      resolutions={[]}
      onUrlChange={noop}
      onResolutionChange={noop}
      onGo={noop}
    />), div);
  ReactDOM.unmountComponentAtNode(div);
});
