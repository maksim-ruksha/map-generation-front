const JWT_LOCAL_STORAGE_KEY = "MAP_GENERATION_USER_JWT";

export const setToken = (token) => {
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
}

export const getToken = () => {
    localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
}

export const hasToken = () => {
    return localStorage.getItem(JWT_LOCAL_STORAGE_KEY) === null;
}


