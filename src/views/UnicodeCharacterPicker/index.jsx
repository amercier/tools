// @flow

import * as React from 'react';
import View from './View';
import { charactersMap } from './config';

type State = {
  copiedCharacter?: string,
  activeTabIndex: number,
  isNotificationClosed: boolean,
};

export default class UnicodeCharacterPicker extends React.Component<{}, State> {
  state = {
    copiedCharacter: undefined,
    activeTabIndex: 0,
    isNotificationClosed: false,
  };

  handleTabChange = (activeTabIndex: number) => {
    this.setState({ activeTabIndex });
  };

  handleCopy = (copiedCharacter: string) => {
    this.setState({
      copiedCharacter,
      isNotificationClosed: false,
    });
  };

  handleCloseNotification = () => {
    this.setState({ isNotificationClosed: true });
  };

  render() {
    return (
      <View
        charactersMap={charactersMap}
        onTabChange={this.handleTabChange}
        onCopy={this.handleCopy}
        onNotificationClose={this.handleCloseNotification}
        {...this.state}
      />
    );
  }
}
