import axios from "axios";
import { clearAccessToken, getAccessToken } from "./token";
import { refreshAccessToken } from "./refresh";

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

api.interceptors.response.use((response) => 
    response, async (error) => {
        const originalRequest = error.config;

        if(originalRequest.skipAuthRefresh) {
            return Promise.reject(error);
        }

        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        if (originalRequest._retry) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            await refreshAccessToken();

            return api(originalRequest);

        } catch (err) {
            clearAccessToken();
            window.location.href = "/login";
            
            return Promise.reject(err);
        }
    }
);

export default api;