import {axiosInstance} from './instance';
import { KEY } from './config';

const request = (page) => (
    axiosInstance.get(`now_playing${KEY}&page=${page? page : 1}`)
    .then(response => response.data.results)
    .catch(error=>console.log(error))
);

export default request;