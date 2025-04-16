import axiosInstance from "./axiosInstance";

const getUserList = () => {
    const url = "user/userList";
    return axiosInstance.post(url);
}

const getServices = () => {
    const url = "service/fetchServices";
    return axiosInstance.post(url);
}

const createUser = (payload) => {
    const url = "user/createUser";
    return axiosInstance.post(url, payload);
}

const updateUser = (payload) => {
    const url = "user/updateUser";
    return axiosInstance.post(url, payload);
}

const userDetail = (id) => {
    const url = "user/userDetails";
    return axiosInstance.post(url, {id});
}

export const userService = {
    getUserList,
    getServices,
    createUser,
    updateUser,
    userDetail
}