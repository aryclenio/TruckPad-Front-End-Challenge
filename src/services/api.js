import axios from 'axios';

// This is the axios base url to handle the requests
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;