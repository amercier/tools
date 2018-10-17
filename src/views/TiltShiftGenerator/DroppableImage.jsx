import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { string, node, object, func } from 'prop-types';

const supportedTypes = ['image/jpeg', 'image/jpg', 'image/tiff', 'image/gif', 'image/png'];

const absoluteCover = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
};

export default class DroppableImage extends Component {
  static propTypes = {
    image: string,
    imageStyle: object, // eslint-disable-line react/forbid-prop-types
    imageRef: object, // eslint-disable-line react/forbid-prop-types
    placeholder: string.isRequired,
    onDrop: func.isRequired,
    children: node,
  };

  static defaultProps = {
    image: null,
    imageStyle: null,
    imageRef: null,
    children: null,
  };

  state = {
    dropzoneActive: false,
  };

  onDragEnter = () => {
    this.setState({
      dropzoneActive: true,
    });
  };

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false,
    });
  };

  onDropAccepted = files => {
    this.setState({
      dropzoneActive: false,
    });

    const { onDrop } = this.props;
    onDrop(files[0].preview);
  };

  onDropRejected = rejectedFiles => {
    // eslint-disable-line no-unused-vars
    // TODO Implement
  };

  getStyles(image, imageStyle) {
    const { dropzoneActive } = this.state;
    const inactiveBorderColor = image ? 'transparent' : '#ccc';
    return {
      dropZone: {
        marginTop: '2rem',
        minHeight: '25vh',
        border: '2px dashed',
        borderColor: dropzoneActive ? '#43a047' : inactiveBorderColor,
        position: 'relative',
        cursor: 'pointer',
      },
      placeholder: {
        ...absoluteCover,
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
  }

  render() {
    const { image, imageStyle, imageRef, placeholder, children, ...props } = this.props;
    const styles = this.getStyles(image, imageStyle);
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
          <span style={styles.placeholder}>{placeholder}</span>
        )}
        {children}
      </Dropzone>
    );
  }
}
