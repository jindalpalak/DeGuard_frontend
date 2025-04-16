import axiosInstance from './axiosInstance';

const logIn = (payload) => {
    const url = "user/login";
    return axiosInstance.post(url, payload);
}

export const loginService = {
    logIn
}