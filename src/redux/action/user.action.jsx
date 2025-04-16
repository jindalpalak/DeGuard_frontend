import { FETCH_SERVICE, LOGIN_SUCCESSFULLY, SIGN_OUT } from "../type"

export const login = (data) => {
    return {
        type: LOGIN_SUCCESSFULLY,
        payload: data
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