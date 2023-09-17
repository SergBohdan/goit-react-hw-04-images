import React from 'react';
import { nanoid } from 'nanoid'; 
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={nanoid()}
        image={image}
        onClick={() => onClick(image.largeImageURL)}
      />
    ))}
  </ul>
);

export default ImageGallery;
