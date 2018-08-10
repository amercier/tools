import React, { Component } from 'react';
import Character from './Character';
import Tabs from './Tabs';
import View from './View';
import { charactersMap } from './config';

export default class UnicodeCharacterPicker extends Component {
  state = {
    copiedCharacter: null,
    activeTabIndex: 0,
  }

  onCopy = (copiedCharacter) => {
    this.setState({ copiedCharacter });
  }

  onTabChange = (activeTabIndex) => {
    this.setState({ activeTabIndex });
  }

  render() {
    return (
      <View
        RenderTabs={Tabs}
        RenderCharacter={Character}
        charactersMap={charactersMap}
        onTabChange={this.onTabChange}
        onCopy={this.onCopy}
        {...this.state}
      />
    );
  }
}
