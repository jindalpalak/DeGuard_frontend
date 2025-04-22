import { FETCH_SERVICE, LOGIN_SUCCESSFULLY, LOGIN_TIME, SIGN_OUT } from "../type"

export const login = (data) => {
    return {
        type: LOGIN_SUCCESSFULLY,
        payload: data
    }
}

export const setLoginTime = () => {
    return {
        type: LOGIN_TIME,
        payload: new Date().toISOString()
    }
}

export const _logOut = () => ({
    type: SIGN_OUT,
    payload: null
});


export const fetchServices = (data) => ({
    type: FETCH_SERVICE,
    payload: data
})