import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

httpClient.interceptors.request.use(config => {
  config.params = {
    apikey: process.env.REACT_APP_API_KEY,
    ...config.params,
  };

  return config;
});

export { httpClient };
