import React from 'react';

const ImageContainer = ({ cls, src, alt }) => {
  return (
    <figure className={cls}>
      <picture>
        <img src={src} alt={alt} />
      </picture>
    </figure>
  );
};

export default ImageContainer;
