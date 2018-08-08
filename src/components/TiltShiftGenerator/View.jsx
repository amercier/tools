import React from 'react';
import { Button } from 'rmwc/Button';
import {
  number, string, object, func,
} from '../common/prop-types';

const View = ({
  RenderOptions, RenderDroppableImage,
  image, imageHeight, imageRef, canvasRef, downloadUrl,
  onDrop, onOptionChange, onImageLoad,
  ...optionValues
}) => (
  <div>
    <RenderOptions
      disabled={!imageHeight}
      maxDistance={2 * imageHeight}
      onOptionChange={onOptionChange}
      {...optionValues}
    />

    <RenderDroppableImage
      image={image}
      placeholder="Drop an image here..."
      onDrop={onDrop}
      onLoad={onImageLoad}
      imageStyle={{ display: 'none' }}
      imageRef={imageRef}
    >
      <div ref={canvasRef} />
    </RenderDroppableImage>

    <div className="tool-toolbar">
      <a href={downloadUrl} download="tilt-shift">
        <Button raised disabled={!downloadUrl}>
          Download
        </Button>
      </a>
    </div>
  </div>
);

View.propTypes = {
  RenderOptions: func.isRequired,
  RenderDroppableImage: func.isRequired,

  image: string,
  imageHeight: number,
  downloadUrl: string,
  imageRef: object.isRequired, // eslint-disable-line react/forbid-prop-types
  canvasRef: object.isRequired, // eslint-disable-line react/forbid-prop-types

  onDrop: func.isRequired,
  onOptionChange: func.isRequired,
  onImageLoad: func.isRequired,
};

View.defaultProps = {
  image: null,
  imageHeight: null,
  downloadUrl: null,
};

export default View;
