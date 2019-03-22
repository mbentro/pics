import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID b12344389c0c2edb85cbf9ab3c680ac9452071c2592e9591a41f1077db3b0954'
  }
});
