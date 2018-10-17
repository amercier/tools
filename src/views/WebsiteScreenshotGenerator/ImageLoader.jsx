// @flow

import * as React from 'react';
import Spinner from '../../shared/Spinner';

export type Props = {
  width: number,
  height: number,
  loading: boolean,
  blobUrl?: string,
  alt?: string,
};

const ImageLoader = ({
  width, height, loading, blobUrl, alt,
}: Props) => {
  const styles = {
    container: {
      height: 0,
      paddingTop: `${100 * (height / width)}%`, // maintain aspect-ratio
      position: 'relative',
      marginTop: '2rem',
    },
    spinner: {
      display: 'flex',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 250ms ease-out',
      opacity: loading ? '1' : '0',
      background: 'var(--mdc-theme-surface)',
      pointerEvents: 'none',
    },
    image: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      transition: 'opacity 1s ease-out, filter 750ms ease-out',
      willChange: 'opacity, filter',
      opacity: blobUrl && !loading ? '1' : '0',
      filter: blobUrl && !loading ? 'blur(0)' : 'blur(10px)',
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <img src={blobUrl} width={width} height={height} alt={alt} style={styles.image} />

      <div style={styles.spinner}>
        <Spinner size={128} thickness={2} />
      </div>
    </div>
  );
};

ImageLoader.defaultProps = {
  blobUrl: undefined,
  alt: undefined,
};

export default ImageLoader;
