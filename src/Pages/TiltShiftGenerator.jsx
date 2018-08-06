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

  componentDidUpdate(prevProps, prevState) {
    if (this.canvas && this.canvasNeedsUpdate(prevState)) {
      this.updateCanvas();
      this.updateImageDownloadDebounced();
    }
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
    const { image } = this.state;
    if (image) {
      window.URL.revokeObjectURL(image);
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

  onDropRejected(rejectedFiles) { // eslint-disable-line class-methods-use-this, no-unused-vars
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
    ].some(
      key => prevState[key] !== this.state[key], // eslint-disable-line
    );
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
      blur, distance, perspective, zoom, vignetting,
    } = this.state;

    this.canvas.tiltShift(
      0,
      round(position * height),
      width,
      round(position * height),
      blur,
      distance,
    );

    const delta = round(perspective * width);
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

  updateImageDownload() {
    this.canvas.update(); // See https://stackoverflow.com/questions/26783586/canvas-todataurl-returns-blank-image-only-in-firefox/26790802#26790802
    this.setState({
      downloadUrl: this.canvas.toDataURL('image/png'),
    });
  }

  renderSlider(id, label, valueLabel, value, onInput, max = 100, beta = false) {
    const { image } = this.state;
    return (
      <div className={`tilt-shift-generator-${id}`}>
        <span className={`tilt-shift-generator-${id}__label`}>
          {/* TODO Remove exception after ESLint 5 upgrade */}
          {label}{beta && <sup>beta</sup> /* eslint-disable-line react/jsx-one-expression-per-line, max-len */} ({round(value)
          /* eslint-disable-line react/jsx-one-expression-per-line */}{valueLabel})
        </span>
        <Slider
          min={0}
          max={max}
          step={1}
          value={value}
          onInput={onInput}
          disabled={!image}
          discrete
          className={`tilt-shift-generator-${id}__slider`}
        />
      </div>
    );
  }

  render() {
    const classes = {
      root: { name: 'tilt-shift-generator', modifiers: ['has-image'] },
      dropZone: { name: 'tilt-shift-generator__drop-zone', modifiers: ['active'] },
    };

    const {
      blur, distance, downloadUrl, dropzoneActive, image, imageHeight,
      perspective, position, vignetting, zoom,
    } = this.state;

    return (
      <div className={bem(classes.root, { 'has-image': !!image })}>
        {this.renderSlider('position', 'Position', '%', 100 * position, this.onPositionInput)}
        {this.renderSlider('blur', 'Blur', 'px', blur, this.onBlurInput, 200)}
        {this.renderSlider('distance', 'Distance', 'px', distance, this.onDistanceInput, 2 * imageHeight)}
        {this.renderSlider('perspective', 'Perspective', '%', 100 * perspective, this.onPerspectiveInput)}
        {this.renderSlider('zoom', 'Zoom', '%', 100 * zoom, this.onZoomInput, 100, true)}
        {this.renderSlider('vignetting', 'Vignetting', '%', 100 * vignetting, this.onVignettingInput, 100, true)}

        <Dropzone
          ref={this.dropZoneRef}
          className={bem(classes.dropZone, { active: !!dropzoneActive })}
          accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
          multiple={false}
          onDragEnter={() => this.onDragEnter()}
          onDragLeave={() => this.onDragLeave()}
          onDropAccepted={f => this.onDropAccepted(f)}
          onDropRejected={f => this.onDropRejected(f)}
        >
          {image ? (
            <img
              ref={this.imageRef}
              alt=""
              src={image}
              className="tilt-shift-generator__image"
              onLoad={e => this.onImageLoad(e)}
            />
          ) : (
            <span className="tilt-shift-generator__placeholder">
              Drop an image here
            </span>
          )}
        </Dropzone>

        <div className="tool-toolbar">
          <a href={downloadUrl} download="tilt-shift">
            <Button raised disabled={!downloadUrl}>
              Download
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
