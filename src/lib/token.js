let accessToken = null;

export function getAccessToken() {
    console.log("token is get: ", accessToken);
    
    return accessToken;
}

export function setAccessToken(token) {
    console.log("token is set: ", token);
    accessToken = token;
}

export function clearAccessToken() {
    accessToken = null;
}