import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-exam-api.btcd.com.br/v1/mobile',
});

export default api;
