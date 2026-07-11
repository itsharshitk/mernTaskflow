import { refresh } from "../services/auth.service";
import { setAccessToken, clearAccessToken } from "./token";

let refreshPromise = null;

export async function refreshAccessToken() {
    if(refreshPromise){
        return refreshPromise;
    }

    refreshPromise = (async () => {
        try {
            const response = await refresh();
    
            setAccessToken(response.data.accessToken);
    
            return response.data.accessToken;
        } catch (error) {
            clearAccessToken();
            throw error;
        } finally {
            refreshPromise = null;
        }
    })();

    return refreshPromise;
}