import axios from "axios";
import { getAccessToken } from "../lib/token";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {

    const token = getAccessToken();
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
      async (error) => {
    }
);

export default api;