// Importamos o Axios, uma biblioteca que facilita a comunicação com APIs HTTP.
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
