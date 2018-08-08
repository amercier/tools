import React from 'react';
import Spinner from '../common/Spinner';
import { bool, number, string } from '../common/prop-types';

const ImageLoader = ({
  width, height, loading, blobUrl, alt,
}) => {
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

ImageLoader.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  loading: bool.isRequired,
  blobUrl: string,
  alt: string,
};

ImageLoader.defaultProps = {
  blobUrl: null,
  alt: null,
};

export default ImageLoader;
