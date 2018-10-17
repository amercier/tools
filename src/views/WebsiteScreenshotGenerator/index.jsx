// @flow

import fetchPonyfill from 'fetch-ponyfill';
import { format as formatUrl } from 'url';

import * as React from 'react';

import View from './View';
import { api, resolutions } from './config';

const { fetch } = fetchPonyfill();

export function getScreenshotUrl(url: string, width: number, height: number) {
  return formatUrl({
    ...api,
    query: { url, width, height },
  });
}

type State = {
  url: string,
  resolution: string,
  loading: boolean,
  displayedUrl?: string,
  blobUrl?: string,
};

export default class WebsiteScreenshotGenerator extends React.Component<{}, State> {
  state = {
    url: 'https://google.com/',
    resolution: resolutions[2],
    loading: false,
  };

  handleUrlChange = (url: string) => {
    this.setState({ url });
  };

  handleResolutionChange = (resolution: string) => {
    this.setState({ resolution });
  };

  handleGo = async () => {
    const { url, resolution } = this.state;
    const [width, height] = resolution.split(' x ');
    const actualUrl = getScreenshotUrl(url, +width, +height);

    this.setState({
      displayedUrl: url,
      blobUrl: undefined,
      loading: true,
    });

    try {
      const response = await fetch(actualUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      this.setState({
        blobUrl,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <View
        resolutions={resolutions}
        onUrlChange={this.handleUrlChange}
        onResolutionChange={this.handleResolutionChange}
        onGo={this.handleGo}
        {...this.props}
        {...this.state}
      />
    );
  }
}
