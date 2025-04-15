import { LOGIN_SUCCESSFULLY, SIGN_OUT } from "../type"

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