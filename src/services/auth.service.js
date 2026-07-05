import api from "./api";

export default async function login(credentials) {
    const response = await api.post("/auth/login", credentials)
    
    return response;
}