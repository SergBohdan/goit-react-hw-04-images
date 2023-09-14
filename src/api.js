import axios from 'axios';

const API_KEY = '39312156-dd1011ec12002fc77e8376352';

export const fetchImages = (query, page) => {
    
  return axios
    .get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    .then((response) => {
      const data = response.data;
      const images = data.hits;
      return images;
    })
};