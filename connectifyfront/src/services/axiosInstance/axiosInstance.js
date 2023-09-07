import axios from "axios"
import Cookies from 'js-cookie';

export const getToken = () => Cookies.get('jwt');
console.log("getToken",getToken())

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;
console.log(getAuthorizationHeader())


const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000/api',
    withCredentials:true,
    timeout: 1000
});


axiosInstance.interceptors.request.use(
    (request) => {
        request.headers.common['Accept'] = 'application/json';
        request.headers.common['Authorization'] = getAuthorizationHeader();
        return request
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;