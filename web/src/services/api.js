import axios from 'axios';

const api = axios.create({
  headers: {
    authorization: localStorage.getItem('token'),
  },
});

export default api;
