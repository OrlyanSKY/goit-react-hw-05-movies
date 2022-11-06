import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '46354c0f6d8d48bd63fbf74687131c27';

export const thmdAPI = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});
