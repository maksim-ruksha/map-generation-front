import {validateToken} from "./JwtService";

const USER_NAME_LOCAL_STORAGE_KEY = "MAP_GENERATION_USER_NAME";
const USER_ID_LOCAL_STORAGE_KEY = "MAP_GENERATION_USER_ID";

export const setUser = (name, id) => {
    localStorage.setItem(USER_NAME_LOCAL_STORAGE_KEY, name);
    localStorage.setItem(USER_ID_LOCAL_STORAGE_KEY, id);
}

export const getUser = () => {
    return {
        name: localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY),
        id: localStorage.getItem(USER_ID_LOCAL_STORAGE_KEY)
    };
}

export const clearUser = () => {
    localStorage.removeItem(USER_NAME_LOCAL_STORAGE_KEY);
    localStorage.removeItem(USER_ID_LOCAL_STORAGE_KEY);
}

export const isAuthorized = async () => {
    const user = getUser();
    const isTokenValid = await validateToken(user.name);
    return isTokenValid
        && user.name !== null
        && user.id !== null;
}