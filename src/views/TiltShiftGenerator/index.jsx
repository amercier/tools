import * as fx from 'glfx-es6';
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import DroppableImage from './DroppableImage';
import Options from './Options';
import Toolbar from './Toolbar';
import View from './View';
import { defaults } from './config';

const { round } = Math;

export default class TiltShiftGenerator extends Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      image: null,
      imageWidth: 0,
      imageHeight: 0,
      ...defaults,
      downloadUrl: null,
    };

    this.onOptionChange = this.onOptionChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.updateImageDownload = this.updateImageDownload.bind(this);
    this.updateImageDownloadDebounced = debounce(this.updateImageDownload, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.canvas && this.canvasNeedsUpdate(prevState)) {
      this.updateCanvas();
      this.updateImageDownloadDebounced();
    }
  }

  onDrop(preview) {
    const { image } = this.state;
    if (image) {
      window.URL.revokeObjectURL(image);
    }

    if (this.texture) {
      this.texture.destroy();
      delete this.texture;
    }

    if (this.canvas) {
      this.canvas.parentNode.removeChild(this.canvas);
      delete this.canvas;
    }

    this.setState({
      dropzoneActive: false,
      image: preview,
      imageWidth: 0,
      imageHeight: 0,
      downloadUrl: null,
    });
  }

  onDropRejected(rejectedFiles) { // eslint-disable-line class-methods-use-this, no-unused-vars
    // TODO Implement
  }

  onImageLoad({ target }) {
    const {
      naturalWidth: imageWidth,
      naturalHeight: imageHeight,
    } = target;
    const distance = round(imageHeight / 2);
    this.setState({ imageWidth, imageHeight, distance });
    this.createCanvas(imageWidth, imageHeight);
  }

  onOptionChange(name, value) {
    this.setState({ [name]: value });
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
    this.canvas.style.width = '100%';
    this.canvasRef.current.appendChild(this.canvas);
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
      round(position * height / 100),
      width,
      round(position * height / 100),
      blur,
      distance,
    );

    const delta = round(perspective * width / 100);
    this.canvas.perspective(
      [
        ...[0, 0],
        ...[width, 0],
        ...[0, height],
        ...[width, height],
      ],
      [
        ...[delta - round(zoom * delta / 100), 0],
        ...[width - delta + round(zoom * delta / 100), 0],
        ...[-round(zoom * delta / 100), height],
        ...[width + round(zoom * delta / 100), height],
      ],
    );
    this.canvas.vignette(0.5, vignetting / 100);
    this.canvas.update();
  }

  updateImageDownload() {
    this.canvas.update(); // See https://stackoverflow.com/questions/26783586/canvas-todataurl-returns-blank-image-only-in-firefox/26790802#26790802
    this.setState({
      downloadUrl: this.canvas.toDataURL('image/png'),
    });
  }

  render() {
    return (
      <View
        RenderDroppableImage={DroppableImage}
        RenderOptions={Options}
        RenderToolbar={Toolbar}

        canvasRef={this.canvasRef}
        imageRef={this.imageRef}
        onDrop={this.onDrop}
        {...this.props}
        {...this.state}

        onOptionChange={this.onOptionChange}
        onImageLoad={this.onImageLoad}
      />
    );
  }
}
