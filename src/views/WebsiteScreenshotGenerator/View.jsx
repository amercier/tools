// @flow

import filenamifyUrl from 'filenamify-url';
import * as React from 'react';
import ImageLoader from './ImageLoader';
import Toolbar from './Toolbar';

function getFilenameFromUrl(url, extension) {
  const basename = filenamifyUrl(url, { replacement: '-' });
  return `${basename}.${extension}`;
}

type Props = {
  RenderToolbar: typeof Toolbar,
  RenderImageLoader: typeof ImageLoader,

  url: string,
  resolution: string,
  resolutions: string[],
  displayedUrl?: string,
  blobUrl?: string,
  loading: boolean,

  onUrlChange: (url: string) => *,
  onResolutionChange: (resolution: string) => *,
  onGo: () => *,
};

const View = ({
  RenderToolbar, RenderImageLoader,
  url, resolution, resolutions, displayedUrl, blobUrl, loading,
  onUrlChange, onResolutionChange, onGo,
}: Props) => {
  const [imageWidth, imageHeight] = resolution.split(' x ').map(x => +x);
  return (
    <div>
      <RenderToolbar
        onUrlChange={onUrlChange}
        onResolutionChange={onResolutionChange}
        onGo={onGo}
        url={url}
        resolution={resolution}
        resolutions={resolutions}
        blobUrl={blobUrl}
        filename={displayedUrl && getFilenameFromUrl(displayedUrl, 'jpg')}
      />
      <RenderImageLoader
        width={imageWidth}
        height={imageHeight}
        blobUrl={blobUrl}
        loading={loading}
        alt={displayedUrl && `Screenshot of ${displayedUrl} web page`}
      />
    </div>
  );
};

View.defaultProps = {
  RenderToolbar: Toolbar,
  RenderImageLoader: ImageLoader,
  displayedUrl: undefined,
  blobUrl: undefined,
};

export default View;
