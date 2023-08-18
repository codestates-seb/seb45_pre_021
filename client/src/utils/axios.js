import axios from 'axios';

const myAxios = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'ngrok-skip-browser-warning': '69420',
  },
});

export default myAxios;
