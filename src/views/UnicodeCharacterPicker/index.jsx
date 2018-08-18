import React, { Component } from 'react';
import Character from './Character';
import Kbd from './Kbd';
import Notification from './Notification';
import Nav from './Nav';
import View from './View';
import { charactersMap } from './config';

export default class UnicodeCharacterPicker extends Component {
  state = {
    copiedCharacter: null,
    activeTabIndex: 0,
    isNotificationClosed: false,
  }

  handleTabChange = (activeTabIndex) => {
    this.setState({ activeTabIndex });
  }

  handleCopy = (copiedCharacter) => {
    this.setState({
      copiedCharacter,
      isNotificationClosed: false,
    });
  }

  handleCloseNotification = () => {
    this.setState({ isNotificationClosed: true });
  }

  render() {
    return (
      <View
        RenderNav={Nav}
        RenderCharacter={Character}
        RenderNotification={Notification}
        RenderKbd={Kbd}
        charactersMap={charactersMap}
        onTabChange={this.handleTabChange}
        onCopy={this.handleCopy}
        onNotificationClose={this.handleCloseNotification}
        {...this.state}
      />
    );
  }
}
