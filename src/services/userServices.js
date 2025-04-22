import {axiosWithToken} from "./axiosInstance";

const getUserList = () => {
    const url = "user/userList";
    return axiosWithToken.post(url);
}

const getServices = () => {
    const url = "service/fetchServices";
    return axiosWithToken.post(url);
}

const createUser = (payload) => {
    const url = "user/createUser";
    return axiosWithToken.post(url, payload);
}

const updateUser = (payload) => {
    const url = "user/updateUser";
    return axiosWithToken.post(url, payload);
}

const userDetail = (id) => {
    const url = "user/userDetails";
    return axiosWithToken.post(url, {id});
}

export const userService = {
    getUserList,
    getServices,
    createUser,
    updateUser,
    userDetail
}