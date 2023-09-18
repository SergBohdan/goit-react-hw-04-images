import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { fetchImages } from 'api';


function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    fetchImages(query, page)
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages]);
        setShowButton(newImages.length >= 12);
      })
      .catch(error => {
        console.error('Error getting images:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSearch = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImage(largeImageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShowModal(false);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {showButton && !isLoading && <Button onLoadMore={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;