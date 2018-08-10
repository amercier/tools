import React from 'react';
import {
  number, string, object, func,
} from '../../lib/prop-types';

const View = ({
  RenderOptions, RenderDroppableImage, RenderToolbar,
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

    <RenderToolbar downloadUrl={downloadUrl} />
  </div>
);

View.propTypes = {
  RenderOptions: func.isRequired,
  RenderDroppableImage: func.isRequired,
  RenderToolbar: func.isRequired,

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
