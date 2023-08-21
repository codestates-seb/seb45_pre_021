import axios from 'axios';

const storedToken = localStorage.getItem('access_token');

const myAxios = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${storedToken}`,
  },
});

export default myAxios;
