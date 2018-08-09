import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
import { noop } from '../common/lang';

const Noop = () => <div />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <View
      RenderTabs={Noop}
      RenderCharacter={Noop}
      charactersMap={[{ characters: '' }]}
      activeTabIndex={0}
      onTabChange={noop}
      onCopy={noop}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
