import React, { Component } from 'react';
import Character from './Character';
import Tabs from './Tabs';
import View from './View';
import { charactersMap } from './config';

export default class UnicodeCharacterPicker extends Component {
  constructor() {
    super();
    this.state = {
      copiedCharacter: null,
      activeTabIndex: 0,
    };

    this.onCopy = this.onCopy.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onCopy(copiedCharacter) {
    this.setState({ copiedCharacter });
  }

  onTabChange(activeTabIndex) {
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
