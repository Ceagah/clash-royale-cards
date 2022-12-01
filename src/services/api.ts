import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://royaleapi.github.io/cr-api-data/json'
})