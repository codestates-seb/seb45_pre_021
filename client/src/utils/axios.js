import axios from 'axios';

const myAxios = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

myAxios.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem('access_token');
  return config;
});

export default myAxios;
