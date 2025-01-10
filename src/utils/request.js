import axios from "axios";

const request = axios.create({
    baseURL: "/api",
});

request.interceptors.request.use(config => {
   return config;
});

request.interceptors.response.use(response => {
    return response.data;
});

export default request;
