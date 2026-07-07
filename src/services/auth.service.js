import api from "./api";

export default async function login(credentials) {
    
    const response = await api.post("/auth/login", credentials)
    
    return response;
}

export async function getMe() {
    const accessToken = localStorage.getItem("accessToken");

    const res = await api.get("/auth/me", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    });

    return res.data;
}