import {axiosInstance} from './instance';
import { KEY } from './config';

const request = (page) => (
  axiosInstance.get(`now_playing${KEY}&page=${page}`)
    .then(response=> console.log(response))
    .catch(error=>console.log(error))
);

export default request;