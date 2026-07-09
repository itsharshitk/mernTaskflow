import api from "../lib/axios";

export default async function login(credentials) {
    
    const response = await api.post("/auth/login", credentials, {
        skipAuthRefresh: true,
    })
    
    return response;
}

export async function getMe() {
    // const accessToken = localStorage.getItem("accessToken");
    const res = await api.get("/auth/me");

    return res.data;
}

export const refresh = async () => {
    const res = await api.post("/auth/refresh", {}, {
        skipAuthRefresh: true,
    });

    return res.data;
}