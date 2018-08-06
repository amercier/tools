import bem from 'bem-classnames';
import * as fx from 'glfx-es6';
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { Slider } from 'rmwc/Slider';
import Dropzone from 'react-dropzone';

import './TiltShiftGenerator.scss';

const { round } = Math;

export default class TiltShiftGenerator extends Component {
  constructor() {
    super();
    this.dropZoneRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      dropzoneActive: false,
      image: null,
      imageWidth: 0,
      imageHeight: 0,
      position: 0.5,
      perspective: 0.1,
      zoom: 0.5,
      blur: 30,
      distance: 0,
      vignetting: 0.2,
      downloadUrl: null,
    };

    this.onPositionInput = this.onPositionInput.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.onDistanceInput = this.onDistanceInput.bind(this);
    this.onPerspectiveInput = this.onPerspectiveInput.bind(this);
    this.onZoomInput = this.onZoomInput.bind(this);
    this.onVignettingInput = this.onVignettingInput.bind(this);
    this.updateImageDownloadDebounced = debounce(this.updateImageDownload, 500);
  }

  onDragEnter() {
    this.setState({
      dropzoneActive: true,
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false,
    });
  }

  onDropAccepted(files) {
    if (this.state.image) {
      window.URL.revokeObjectURL(this.state.image);
    }

    if (this.texture) {
      this.texture.destroy();
      delete this.texture;
    }

    if (this.canvas) {
      this.dropZoneRef.current.node.removeChild(this.canvas);
      delete this.canvas;
    }

    this.setState({
      dropzoneActive: false,
      image: files[0].preview,
      imageWidth: 0,
      imageHeight: 0,
      downloadUrl: null,
    });
  }

  onDropRejected(rejectedFiles) {
    // TODO Implement
  }

  onImageLoad(event) {
    const {
      naturalWidth: imageWidth,
      naturalHeight: imageHeight,
    } = event.target;
    const distance = round(imageHeight / 2);

    this.createCanvas(imageWidth, imageHeight);
    this.setState({ imageWidth, imageHeight, distance });
  }

  canvasNeedsUpdate(prevState) {
    return [
      'imageWidth',
      'imageHeight',
      'position',
      'blur',
      'distance',
      'perspective',
      'zoom',
      'vignetting',
    ].some(key => prevState[key] !== this.state[key]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.canvas && this.canvasNeedsUpdate(prevState)) {
      this.updateCanvas();
      this.updateImageDownloadDebounced();
    }
  }

  createCanvas(width, height) {
    this.canvas = fx.canvas();
    this.canvas.className = 'tilt-shift-generator__canvas';
    this.dropZoneRef.current.node.appendChild(this.canvas);
    this.texture = this.canvas.texture(this.imageRef.current, width, height);
  }

  updateCanvas() {
    this.canvas.draw(this.texture);

    const {
      imageWidth: width, imageHeight: height, position,
      blur, distance, zoom, vignetting,
    } = this.state;

    this.canvas.tiltShift(
      0,
      round(position * height),
      width,
      round(position * height),
      blur,
      distance,
    );

    const delta = round(this.state.perspective * width);
    this.canvas.perspective(
      [
        ...[0, 0],
        ...[width, 0],
        ...[0, height],
        ...[width, height],
      ],
      [
        ...[delta - round(zoom * delta), 0],
        ...[width - delta + round(zoom * delta), 0],
        ...[-round(zoom * delta), height],
        ...[width + round(zoom * delta), height],
      ],
    );
    this.canvas.vignette(0.5, vignetting);
    this.canvas.update();
  }

  onPositionInput(e) {
    this.setState({ position: e.detail.value / 100 });
  }

  onPerspectiveInput(e) {
    this.setState({ perspective: e.detail.value / 100 });
  }

  onZoomInput(e) {
    this.setState({ zoom: e.detail.value / 100 });
  }

  onBlurInput(e) {
    this.setState({ blur: e.detail.value });
  }

  onDistanceInput(e) {
    this.setState({ distance: e.detail.value });
  }

  onVignettingInput(e) {
    this.setState({ vignetting: e.detail.value / 100 });
  }

  updateImageDownload() {
    this.canvas.update(); // See https://stackoverflow.com/questions/26783586/canvas-todataurl-returns-blank-image-only-in-firefox/26790802#26790802
    this.setState({
      downloadUrl: this.canvas.toDataURL('image/png'),
    });
  }

  render() {
    const classes = {
      root: { name: 'tilt-shift-generator', modifiers: ['has-image'] },
      dropZone: { name: 'tilt-shift-generator__drop-zone', modifiers: ['active'] },
    };
    return (
      <div className={bem(classes.root, { 'has-image': !!this.state.image })}>
        <div className="tilt-shift-generator-position">
          <span className="tilt-shift-generator-position__label">
            Position (
            {round(100 * this.state.position)}
%)
          </span>
          <Slider
            min={0}
            max={100}
            step={1}
            value={100 * this.state.position}
            onInput={this.onPositionInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-position__slider"
          />
        </div>
        <div className="tilt-shift-generator-blur">
          <span className="tilt-shift-generator-blur__label">
            Blur (
            {this.state.blur}
px)
          </span>
          <Slider
            min={0}
            max={200}
            step={1}
            value={this.state.blur}
            onInput={this.onBlurInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-blur__slider"
          />
        </div>
        <div className="tilt-shift-generator-distance">
          <span className="tilt-shift-generator-distance__label">
            Distance (
            {this.state.distance}
px)
          </span>
          <Slider
            min={0}
            max={2 * this.state.imageHeight}
            step={1}
            value={this.state.distance}
            onInput={this.onDistanceInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-distance__slider"
          />
        </div>
        <div className="tilt-shift-generator-perspective">
          <span className="tilt-shift-generator-perspective__label">
            Perspective (
            {round(100 * this.state.perspective)}
%)
          </span>
          <Slider
            min={0}
            max={100}
            step={1}
            value={100 * this.state.perspective}
            onInput={this.onPerspectiveInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-perspective__slider"
          />
        </div>
        <div className="tilt-shift-generator-zoom">
          <span className="tilt-shift-generator-zoom__label">
            Zoom
            <sup>
beta
            </sup>
            {' '}
(
            {round(100 * this.state.zoom)}
%)
          </span>
          <Slider
            min={0}
            max={100}
            step={1}
            value={100 * this.state.zoom}
            onInput={this.onZoomInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-zoom__slider"
          />
        </div>
        <div className="tilt-shift-generator-vignetting">
          <span className="tilt-shift-generator-vignetting__label">
            Vignetting
            <sup>
beta
            </sup>
            {' '}
(
            {round(this.state.vignetting * 100)}
%)
          </span>
          <Slider
            min={0}
            max={100}
            step={1}
            value={100 * this.state.vignetting}
            onInput={this.onVignettingInput}
            disabled={!this.state.image}
            discrete
            className="tilt-shift-generator-vignetting__slider"
          />
        </div>
        <Dropzone
          ref={this.dropZoneRef}
          className={bem(classes.dropZone, { active: !!this.state.dropzoneActive })}
          accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
          multiple={false}
          onDragEnter={() => this.onDragEnter()}
          onDragLeave={() => this.onDragLeave()}
          onDropAccepted={f => this.onDropAccepted(f)}
          onDropRejected={f => this.onDropRejected(f)}
        >
          {this.state.image ? (
            <div>
              <img
                ref={this.imageRef}
                alt=""
                src={this.state.image}
                className="tilt-shift-generator__image"
                onLoad={e => this.onImageLoad(e)}
              />
            </div>
          ) : (
            <span className="tilt-shift-generator__placeholder">
Drop an image here
            </span>
          )}
        </Dropzone>

        <div className="tool-toolbar">
          <a href={this.state.downloadUrl} download="tilt-shift">
            <Button raised disabled={!this.state.downloadUrl}>
Download
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
