import isUrl from 'is-url';
import { format as formatUrl } from 'url';
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { Select } from 'rmwc/Select';
import { TextField } from 'rmwc/TextField';
import fetchPonyfill from 'fetch-ponyfill';
import filenamifyUrl from 'filenamify-url';

import './WebsiteScreenshotGenerator.scss';
const { fetch } = fetchPonyfill();

function getScreenshotUrl(url, width, height) {
  return formatUrl({
    protocol: 'https',
    host: 'screenshot.amercier.com',
    pathname: '/screenshot',
    query: { url, width, height }
  });
}

function getFilenameFromUrl(url, extension) {
  const basename = filenamifyUrl(url, {replacement: '-'});
  return `${basename}.${extension}`;
}

export default class WebsiteScreenshotGenerator extends Component {

  constructor() {
    super();

    this.resolutions = [
      '640 x 480',
      '1024 x 768',
      '1280 x 720',
      '1920 x 1080',
    ];

    this.state = {
      url: 'https://google.com/',
      resolution: this.resolutions[2],
    };
  }

  render() {
    const [imageWidth, imageHeight] = this.state.resolution.split(' x ');

    const image = this.state.displayedUrl && (
      <img
        src={this.state.blobUrl}
        width={imageWidth}
        height={imageHeight}
        alt={`Screenshot of ${this.state.displayedUrl} web page`}
      />
    );

    const downloadButton = this.state.displayedUrl && (
        <a href={this.state.blobUrl} download={getFilenameFromUrl(this.state.displayedUrl, 'jpg')}>
          <Button raised disabled={!this.state.blobUrl}>Download</Button>
        </a>
      );

    return (
      <div>
        <div className="website-screenshot-url">
          <TextField label="Website URL" onChange={e => this.onUrlChange(e)} value={this.state.url} />
          <Select
            value={this.state.resolution}
            onChange={e => this.setState({ resolution: e.target.value })}
            label="Resolution"
            options={this.resolutions.map(resolution => ({label: resolution, value: resolution}))}
          />
          <Button raised disabled={!isUrl(this.state.url)} onClick={() => this.applyUrl(imageWidth, imageHeight)}>Go</Button>
        </div>

        <div
          className={`website-screenshot-image website-screenshot-image--${this.state.loadingState}`}
          style={{
            width: '100%',
            height: 0,
            paddingTop: `${100 * (imageHeight / imageWidth)}%`, // maintain aspect-ratio
          }}
        >
          {image}

          <div className="website-screenshot-image__progress">
            <svg className="mdc-circular-progress" viewBox="25 25 50 50">
              <circle className="mdc-circular-progress__path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
        </div>

        <div className="tool-toolbar">
          {downloadButton}
        </div>
      </div>
    );
  }

  onUrlChange({ target }) {
    this.setState({ url: target.value });
  }

  applyUrl(width, height) {
    const displayedUrl = this.state.url;
    const actualUrl = getScreenshotUrl(displayedUrl, width, height);

    this.setState({
      displayedUrl,
      blobUrl: null,
      loadingState: 'loading',
    });

    return fetch(actualUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        this.setState({
          blobUrl,
          loadingState: 'loaded'
        });
      })
      .catch(() => {
        this.setState({ loadingState: 'failed' });
      });
  }
}
