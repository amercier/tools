// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../../lib/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <View
      RenderNav={Noop}
      RenderCharacter={Noop}
      RenderNotification={Noop}
      RenderKbd={Noop}
      charactersMap={[{
        name: 'Testing',
        icon: 'build',
        characters: '',
      }]}
      activeTabIndex={0}
      isNotificationClosed={false}
      onTabChange={noop}
      onNotificationClose={noop}
      onCopy={noop}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
