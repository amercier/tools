import { format as formatUrl } from 'url';
import React, { Component } from 'react';
import fetchPonyfill from 'fetch-ponyfill';
import ImageLoader from './ImageLoader';
import Toolbar from './Toolbar';
import View from './View';
import { api, resolutions } from './config';

const { fetch } = fetchPonyfill();

export function getScreenshotUrl(url, width, height) {
  return formatUrl({
    ...api,
    query: { url, width, height },
  });
}

export default class WebsiteScreenshotGenerator extends Component {
  state = {
    url: 'https://google.com/',
    resolution: resolutions[2],
    loading: false,
  };

  onUrlChange = url => {
    this.setState({ url });
  };

  onResolutionChange = resolution => {
    this.setState({ resolution });
  };

  go = async () => {
    const { url, resolution } = this.state;
    const [width, height] = resolution.split(' x ');
    const actualUrl = getScreenshotUrl(url, width, height);

    this.setState({
      displayedUrl: url,
      blobUrl: null,
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
        RenderToolbar={Toolbar}
        RenderImageLoader={ImageLoader}
        resolutions={resolutions}
        onUrlChange={this.onUrlChange}
        onResolutionChange={this.onResolutionChange}
        onGo={this.go}
        {...this.props}
        {...this.state}
      />
    );
  }
}
