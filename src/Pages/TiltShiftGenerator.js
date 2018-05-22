import isUrl from 'is-url';
import { format as formatUrl } from 'url';
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import fetchPonyfill from 'fetch-ponyfill';

import './TiltShiftGenerator.css';
const { fetch } = fetchPonyfill();

function getScreenshotUrl(url, width, height) {
  return formatUrl({
    protocol: 'https',
    host: 'screenshot.amercier.com',
    pathname: '/screenshot',
    query: { url, width, height }
  });
}

export default class TiltShiftGenerator extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://google.com/',
    };
  }

  render() {
    const imageWidth = 1280;
    const imageHeight = 720;

    const perspective = 940;
    const rotateX = 50
    const rotateZ = 3;
    const translateY = 0;
    const scale = 2.2;

    const blurDepth = 3;
    const blurBrightness = 0.95;
    const blurMaskStart = 0.25;
    const blurMaskEnd = 0.45;
    const blurMaskMaxBlur = 1;
    const blurMaskMinBlur = 0;
    const maskImage = `linear-gradient(
      top,
      rgba(0, 0, 0, ${blurMaskMaxBlur}) ${100 * blurMaskStart}%,
      rgba(0, 0, 0, ${blurMaskMinBlur}) ${100 * blurMaskEnd}%,
      rgba(0, 0, 0, ${blurMaskMinBlur}) ${100 - 100 * blurMaskEnd}%,
      rgba(0, 0, 0, ${blurMaskMaxBlur}) ${100 - 100 * blurMaskStart}%
    )`;
    const backgroundColor = 'rgb(255, 255, 255)';

    const image = this.state.blobUrl && (
      <div>
        <div
          className="tilt-shift-image__content-clear"
          style={{
            perspective: `${perspective}px`,
          }}
        >
          <img
            src={this.state.blobUrl}
            width={imageWidth}
            height={imageHeight}
            style={{
              transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(${100 * translateY}%) scale(${scale})`
            }}
            alt={`Clear screenshot of ${this.state.url} web page`}
          />
        </div>
        <div
          className="tilt-shift-image__content-blur"
          width={imageWidth}
          height={imageHeight}
          style={{
            backgroundColor,
            perspective: `${perspective}px`,
            WebkitMaskImage: `-webkit-${maskImage}`,
            maskImage: maskImage,
          }}
        >
          <img
            src={this.state.blobUrl}
            width={imageWidth}
            height={imageHeight}
            style={{
              backgroundColor,
              filter: `blur(${blurDepth}px) brightness(${blurBrightness})`,
              transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(${100 * translateY}%) scale(${scale})`,
            }}
            alt={`Blurred screenshot of ${this.state.url} web page`}
          />
        </div>
      </div>
    );

    return (
      <div>
        <div className="tilt-shift-url">
          <TextField fullwidth label="Website URL" onChange={e => this.onUrlChange(e)} value={this.state.url} />
          <Button raised disabled={!isUrl(this.state.url)} onClick={() => this.applyUrl(imageWidth, imageHeight)}>Go</Button>
        </div>

        <div
          className={`tilt-shift-image tilt-shift-image--${this.state.loadingState}`}
          style={{
            width: '100%',
            height: 0,
            paddingTop: `${100 * (imageHeight / imageWidth)}%`, // maintain aspect-ratio
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {image}

          <div className="tilt-shift-image__progress">
            <svg className="mdc-circular-progress" viewBox="25 25 50 50">
              <circle className="mdc-circular-progress__path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  onUrlChange({ target }) {
    this.setState({ url: target.value });
  }

  applyUrl(width, height) {
    const actualUrl = getScreenshotUrl(this.state.url, width, height);

    this.setState({ blobUrl: null, loadingState: 'loading' });

    return fetch(actualUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        this.setState({ blobUrl, loadingState: 'loaded' });
      })
      .catch(() => {
        this.setState({ loadingState: 'failed' });
      });
  }
}
