import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onClick={() => onClick(image.largeImageURL)}
      />
    ))}
  </ul>
);

export default ImageGallery;