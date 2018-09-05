import {axiosInstance} from './instance';
import { KEY } from './config';

const request = (page) => {
  return (
    axiosInstance.get(`now_playing${KEY}&page=${page}`)
    .then(response => response.data.results)
    .catch(error=>console.log(error))
  );
};

export default request;