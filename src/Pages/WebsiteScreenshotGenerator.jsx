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
    query: { url, width, height },
  });
}

function getFilenameFromUrl(url, extension) {
  const basename = filenamifyUrl(url, { replacement: '-' });
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

  onUrlChange({ target }) {
    this.setState({ url: target.value });
  }

  applyUrl(width, height) {
    const { url } = this.state;
    const actualUrl = getScreenshotUrl(url, width, height);

    this.setState({
      displayedUrl: url,
      blobUrl: null,
      loadingState: 'loading',
    });

    return fetch(actualUrl)
      .then(response => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        this.setState({
          blobUrl,
          loadingState: 'loaded',
        });
      })
      .catch(() => {
        this.setState({ loadingState: 'failed' });
      });
  }

  render() {
    const {
      resolution, displayedUrl, blobUrl, url, loadingState,
    } = this.state;
    const [imageWidth, imageHeight] = resolution.split(' x ');

    const image = displayedUrl && (
      <img
        src={blobUrl}
        width={imageWidth}
        height={imageHeight}
        alt={`Screenshot of ${displayedUrl} web page`}
      />
    );

    const downloadButton = displayedUrl && (
    <a href={blobUrl} download={getFilenameFromUrl(displayedUrl, 'jpg')}>
      <Button raised disabled={!blobUrl}>
        Download
      </Button>
    </a>
    );

    return (
      <div>
        <div className="website-screenshot-url">
          <TextField label="Website URL" onChange={e => this.onUrlChange(e)} value={url} />
          <Select
            value={resolution}
            onChange={e => this.setState({ resolution: e.target.value })}
            label="Resolution"
            options={this.resolutions.map(r => ({ label: r, value: r }))}
          />
          <Button
            raised
            disabled={!isUrl(url)}
            onClick={() => this.applyUrl(imageWidth, imageHeight)}
          >
            Go
          </Button>
        </div>

        <div
          className={`website-screenshot-image website-screenshot-image--${loadingState}`}
          style={{
            width: '100%',
            height: 0,
            paddingTop: `${100 * (imageHeight / imageWidth)}%`, // maintain aspect-ratio
          }}
        >
          {image}

          <div className="website-screenshot-image__progress">
            <svg className="mdc-circular-progress" viewBox="25 25 50 50">
              <circle className="mdc-circular-progress__path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>

        <div className="tool-toolbar">
          {downloadButton}
        </div>
      </div>
    );
  }
}
