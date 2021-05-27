import axios from 'axios';
import { apiUrl } from './urlConfig';

const axiosInstance = axios.create({
    baseURL: apiUrl
})

export default axiosInstance;