// @flow

import * as React from 'react';
import Dropzone from 'react-dropzone';

type Props = {
  image?: string,
  imageStyle?: Object,
  imageRef?: React.Ref<*>,
  placeholder: string,
  onDrop: (preview: string) => void,
  onLoad: (event: { target: HTMLImageElement } & Event) => void,
  children?: React.Node,
};

type State = {
  dropzoneActive: boolean,
};

const supportedTypes = ['image/jpeg', 'image/jpg', 'image/tiff', 'image/gif', 'image/png'];

const absoluteCover = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
};

export default class DroppableImage extends React.Component<Props, State> {
  static defaultProps = {
    image: undefined,
    imageStyle: undefined,
    imageRef: undefined,
    children: null,
  };

  state = {
    dropzoneActive: false,
  };

  getStyles(image?: string, imageStyle?: Object) {
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

  handleDragEnter = () => {
    this.setState({
      dropzoneActive: true,
    });
  };

  handleDragLeave = () => {
    this.setState({
      dropzoneActive: false,
    });
  };

  handleDropAccepted = (files: Object[]) => {
    this.setState({
      dropzoneActive: false,
    });

    const { onDrop } = this.props;
    onDrop(files[0].preview);
  };

  // eslint-disable-next-line no-unused-vars
  handleDropRejected = (rejectedFiles: Object[]) => {
    // TODO Implement
  };

  render() {
    const { image, imageStyle, imageRef, placeholder, children, ...props } = this.props;
    const styles = this.getStyles(image, imageStyle);
    return (
      <Dropzone
        accept={supportedTypes.join(',')}
        multiple={false}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDropAccepted={this.handleDropAccepted}
        onDropRejected={this.handleDropRejected}
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
