import bem from 'bem-classnames';
import * as fx from 'glfx-es6';
import { debounce } from 'lodash-es'
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { Slider } from 'rmwc/Slider';
import Dropzone from 'react-dropzone';

import './TiltShiftGenerator.scss';

const { round } = Math;

export default class TiltShiftGenerator extends Component {
  constructor() {
    super();
    this.imageRef = React.createRef();
    this.canvasRef = React.createRef();

    this.state = {
      dropzoneActive: false,
      image: null,
      imageWidth: 0,
      imageHeight: 0,
      position: 0.5,
      perspective: 0.1,
      zoom: 0.5,
    };

    this.onPositionInput = this.onPositionInput.bind(this);
    this.onPerspectiveInput = this.onPerspectiveInput.bind(this);
    this.onZoomInput = this.onZoomInput.bind(this);
    this.updateImageDownloadDebounced = debounce(this.updateImageDownload, 200);
  }

  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }

  onDropAccepted(files) {
    if (this.state.image) {
      window.URL.revokeObjectURL(this.state.image);
    }
    this.setState({
      dropzoneActive: false,
      image: files[0].preview
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

    this.setState({ imageWidth, imageHeight });

    try {
      this.canvas = fx.canvas();
      this.updateTexture(imageWidth, imageHeight);
    } catch (e) {
      alert(e);
      return;
    }
  }

  updateTexture(imageWidth, imageHeight) {
    const className = this.canvasRef.current.className;
    this.canvas.replace(this.canvasRef.current);
    this.canvas.className = className;
    if (this.texture) {
      this.texture.destroy();
    }
    this.texture = this.canvas.texture(this.imageRef.current);
    this.updateCanvas(imageWidth, imageHeight);
  }

  updateCanvas(width = this.state.imageWidth, height = this.state.imageHeight) {
    if (!this.canvas) {
      return;
    }

    this.canvas.draw(this.texture);

    this.canvas.tiltShift(
      0,
      round(this.state.position * height),
      width,
      round(this.state.position * height), 20, round(height/2)
    );

    const delta = round(this.state.perspective * width);
    const zoom = this.state.zoom;
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
    this.canvas.vignette(0.5, 0.2);
    this.canvas.update();
    this.updateImageDownloadDebounced();
  }

  onPositionInput(e) {
    this.setState({ position: e.detail.value / 100 });
    this.updateCanvas();
  }

  onPerspectiveInput(e) {
    this.setState({ perspective: e.detail.value / 100 });
    this.updateCanvas();
  }

  onZoomInput(e) {
    this.setState({ zoom: e.detail.value / 100 });
    this.updateCanvas();
  }

  updateImageDownload() {
    this.setState({
      downloadUrl: this.canvas.toDataURL('image/jpg')
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
            Position ({round(100 * this.state.position)}%)
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
        <div className="tilt-shift-generator-perspective">
          <span className="tilt-shift-generator-perspective__label">
            Perspective ({round(100 * this.state.perspective)}%)
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
            Zoom<sup>beta</sup> ({round(100 * this.state.zoom)}%)
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
        <Dropzone
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
            <span className="tilt-shift-generator__placeholder">Drop an image here</span>
          )}
          <canvas
            ref={this.canvasRef}
            width={this.state.imageWidth}
            height={this.state.imageHeight}
            className="tilt-shift-generator__canvas"
          ></canvas>
        </Dropzone>

        <div className="tool-toolbar">
          <a href={this.state.downloadUrl} download="tilt-shift">
            <Button raised disabled={!this.state.downloadUrl}>Download</Button>
          </a>
        </div>
      </div>
    );
  }
}
