import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    ContentType: 'application/json',
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
