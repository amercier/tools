// @flow

import * as React from 'react';
import DroppableImage from './DroppableImage';
import Options from './Options';
import Toolbar from './Toolbar';

type ReactObjRef<ElementType: React.ElementType> = {
  current: null | React.ElementRef<ElementType>
};

type Props = {
  RenderOptions: typeof Options,
  RenderDroppableImage: typeof DroppableImage,
  RenderToolbar: typeof Toolbar,

  image: string,
  imageHeight: number,
  downloadUrl: string,
  imageRef: ReactObjRef<'img'>,
  canvasRef: ReactObjRef<'div'>,

  onDrop: (preview: string) => void,
  onOptionChange: (name: string, value: number) => void,
  onImageLoad: (event: { target: HTMLImageElement } & Event) => void,
};

const View = ({
  RenderOptions,
  RenderDroppableImage,
  RenderToolbar,
  image,
  imageHeight,
  imageRef,
  canvasRef,
  downloadUrl,
  onDrop,
  onOptionChange,
  onImageLoad,
  ...optionValues
}: Props) => (
  <div>
    <RenderOptions
      disabled={!imageHeight}
      maxDistance={2 * imageHeight}
      onChange={onOptionChange}
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

View.defaultProps = {
  RenderOptions: Options,
  RenderDroppableImage: DroppableImage,
  RenderToolbar: Toolbar,

  image: undefined,
  imageHeight: undefined,
  downloadUrl: undefined,
};

export default View;
