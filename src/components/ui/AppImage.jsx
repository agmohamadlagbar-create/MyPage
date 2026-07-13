import React, { memo } from 'react';

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  fallbackSrc,
  loading = 'lazy',
  unoptimized = false,
  ...props
}) {
  const style = fill ? {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  } : {
    width,
    height
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      sizes={sizes}
      loading={priority ? 'eager' : loading}
      {...props}
    />
  );
});

export default AppImage;
