import React from 'react';
import filenamifyUrl from 'filenamify-url';
import {
  bool, string, func, arrayOf,
} from '../common/prop-types';

function getFilenameFromUrl(url, extension) {
  const basename = filenamifyUrl(url, { replacement: '-' });
  return `${basename}.${extension}`;
}

const View = ({
  RenderToolbar, RenderImageLoader,
  url, resolution, resolutions, displayedUrl, blobUrl, loading,
  onUrlChange, onResolutionChange, onGo,
}) => {
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

View.propTypes = {
  RenderToolbar: func.isRequired,
  RenderImageLoader: func.isRequired,

  url: string.isRequired,
  resolution: string.isRequired,
  resolutions: arrayOf(string).isRequired,
  onUrlChange: func.isRequired,
  onResolutionChange: func.isRequired,
  onGo: func.isRequired,

  displayedUrl: string,
  blobUrl: string,
  loading: bool.isRequired,
};

View.defaultProps = {
  displayedUrl: null,
  blobUrl: null,
};

export default View;
