import React, { useState } from 'react';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { fetchImages } from 'api';
import ImageGallery from './ImageGallery';
import Loader from './Loader';

function App() {
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSearch = async (value) => {
    setQuery(value);
    setImages([]);
    
    if (value.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const newImages = await fetchImages(query, 1);
      setImages(newImages);
    } catch (error) {
      console.error('Error getting images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (largeImageURL) => {
    setShowModal(true);
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      {query && (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;