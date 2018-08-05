import bem from 'bem-classnames';
import * as fx from 'glfx-es6';
import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import Dropzone from 'react-dropzone';

import './TiltShiftGenerator.scss';

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
    };
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
    this.canvas.draw(this.texture);
    this.updateCanvas(imageWidth, imageHeight);
  }

  updateCanvas(width, height) {
    const { round } = Math;
    const delta = round(0.1 * width);
    this.canvas.perspective(
      [
        ...[0, 0],
        ...[width, 0],
        ...[0, height],
        ...[width, height],
      ],
      [
        ...[delta, 0],
        ...[width - delta, 0],
        ...[-delta, height],
        ...[width + delta, height],
      ],
    );
    this.canvas.vignette(0.5, 0.2);
    this.canvas.tiltShift(0, round(height/2), width, round(height/2), 20, round(height/2));
    this.canvas.update();
    this.setState({
      renderedImageUrl: this.canvas.toDataURL('image/jpeg')
    });
  }

  render() {
    const classes = {
      root: { name: 'tilt-shift-generator', modifiers: ['has-image'] },
      dropZone: { name: 'tilt-shift-generator__drop-zone', modifiers: ['active'] },
    };
    return (
      <div className={bem(classes.root, { 'has-image': !!this.state.image })}>
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
          <a href={this.state.renderedImageUrl} download="tilt-shift.jpg">
            <Button raised disabled={!this.state.renderedImageUrl}>Download</Button>
          </a>
        </div>
      </div>
    );
  }
}
