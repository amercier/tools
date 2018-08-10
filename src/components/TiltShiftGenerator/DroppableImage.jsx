import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {
  string, node, object, func,
} from '../../lib/prop-types';

const supportedTypes = [
  'image/jpeg',
  'image/jpg',
  'image/tiff',
  'image/gif',
  'image/png',
];

export default class DroppableImage extends Component {
  static propTypes = {
    image: string,
    imageStyle: object, // eslint-disable-line react/forbid-prop-types
    imageRef: object, // eslint-disable-line react/forbid-prop-types
    placeholder: string.isRequired,
    onDrop: func.isRequired,
    children: node,
  }

  static defaultProps = {
    image: null,
    imageStyle: null,
    imageRef: null,
    children: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      dropzoneActive: false,
    };

    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDropAccepted = this.onDropAccepted.bind(this);
    this.onDropRejected = this.onDropRejected.bind(this);
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
    this.setState({
      dropzoneActive: false,
    });

    const { onDrop } = this.props;
    onDrop(files[0].preview);
  }

  onDropRejected(rejectedFiles) { // eslint-disable-line class-methods-use-this, no-unused-vars
    // TODO Implement
  }

  render() {
    const {
      image, imageStyle, imageRef, placeholder, children, ...props
    } = this.props;
    const { dropzoneActive } = this.state;

    const inactiveBorderColor = image ? 'transparent' : '#ccc';
    const styles = {
      dropZone: {
        marginTop: '2rem',
        minHeight: '25vh',
        border: '2px dashed',
        borderColor: dropzoneActive ? '#43a047' : inactiveBorderColor,
        position: 'relative',
        cursor: 'pointer',
      },
      placeholder: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#aaa',
      },
      image: {
        display: 'block',
        height: 'auto',
        ...imageStyle,
      },
    };

    return (
      <Dropzone
        accept={supportedTypes.join(',')}
        multiple={false}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDropAccepted={this.onDropAccepted}
        onDropRejected={this.onDropRejected}
        style={styles.dropZone}
      >
        {image ? (
          <img alt="" src={image} style={styles.image} ref={imageRef} {...props} />
        ) : (
          <span style={styles.placeholder}>
            {placeholder}
          </span>
        )}
        {children}
      </Dropzone>
    );
  }
}
