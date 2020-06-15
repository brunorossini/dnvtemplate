import axios from 'axios';

// import store from '~/store';

const api = axios.create({
  baseURL: 'https://devnaveia-api.herokuapp.com/v1/',
});

// api.interceptors.request.use(config => {
//   console.tron.log('store', store);
//   const setting = config;
//   // if (token) setting.headers.Authorization = token;
//   return setting;
// });

export default api;
