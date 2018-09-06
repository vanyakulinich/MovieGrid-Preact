import axios from 'axios';

export const axiosInstance = axios.create({baseURL: 'http://api.themoviedb.org/3/movie'})