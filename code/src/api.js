import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;