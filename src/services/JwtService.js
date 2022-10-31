import axios from "axios";
import {API_BASE} from "../constants/App/App";

const JWT_LOCAL_STORAGE_KEY = "MAP_GENERATION_USER_JWT";

const JWT_VALIDATION_API = "/users/validate";

export const setToken = (token) => {
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
}

export const getToken = () => {
    return localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
}

export const hasToken = () => {
    return localStorage.getItem(JWT_LOCAL_STORAGE_KEY) === null;
}

export const clearToken = () => {
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
}

export const validateToken = async (userName) => {
    const token = getToken();
    if (!token)
        return false;

    const response = await axios.get(API_BASE + JWT_VALIDATION_API,
        {
            params: {
                token: token,
                userName: userName
            }
        }
    );
    return response.data;
}


