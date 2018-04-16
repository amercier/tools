import isUrl from 'is-url';
import { format as formatUrl } from 'url';
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import { saveAs } from 'file-saver';
import fetchPonyfill from 'fetch-ponyfill';
import filenamifyUrl from 'filenamify-url';

import './WebsiteScreenshotGenerator.css';
const { fetch } = fetchPonyfill();

function getScreenshotUrl(pageUrl, width, height) {
  const url = pageUrl.replace(/^[^/]*\/\//, '');
  const clipRect = JSON.stringify({ top: 0, left: 0, width, height });
  const delay = 1000;
  return formatUrl({
    protocol: 'https',
    host: 'screenshot.amercier.com',
    query: { url, width, height, delay, clipRect }
  });
}

function getFilenameFromUrl(pageUrl, extension) {
  const url = filenamifyUrl(pageUrl, {replacement: '-'});
  return `${url}.${extension}`;
}

export default class WebsiteScreenshotGenerator extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://google.com/',
    };
  }

  render() {
    const imageWidth = 1280;
    const imageHeight = 720;

    const image = this.state.displayedUrl && (
      <img
        src={this.state.blobUrl}
        width={imageWidth}
        height={imageHeight}
        alt={`Screenshot of ${this.state.displayedUrl} web page`}
      />
    );

    const downloadButton = this.state.displayedUrl
      ? (
        <a href={this.state.blobUrl} download={getFilenameFromUrl(this.state.displayedUrl, 'jpg')}>
          <Button raised>Download</Button>
        </a>
      )
      : (<Button raised disabled>Download</Button>);

    return (
      <div>
        <div className="website-screenshot-url">
          <TextField fullwidth label="Website URL" onChange={e => this.onUrlChange(e)} value={this.state.url} />
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
      displayedUrl: null,
      blobUrl: null,
      loadingState: 'loading',
    });

    return fetch(actualUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        this.setState({
          displayedUrl,
          blobUrl,
          loadingState: 'loaded'
        });
      })
      .catch(() => {
        this.setState({ loadingState: 'failed' });
      });
  }
}
