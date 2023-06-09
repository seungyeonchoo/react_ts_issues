import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_ACCESS_TOKEN;

const axiosConfig = {
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

export default instance;
