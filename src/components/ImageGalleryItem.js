import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
      onClick={onClick}
    />
  </li>
);

export default ImageGalleryItem;