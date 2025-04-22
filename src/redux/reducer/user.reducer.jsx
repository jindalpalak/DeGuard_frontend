import { FETCH_SERVICE, LOGIN_SUCCESSFULLY, LOGIN_TIME, SIGN_OUT } from "../type";

const initialState = {
    userDetail: null
}

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_SUCCESSFULLY:
            return {
                ...state,
                userDetail: payload
            }
        case SIGN_OUT:
            return {
                ...state,
                userDetail: payload
            }
        case FETCH_SERVICE:
            return {
                ...state,
                services: payload
            }
        case LOGIN_TIME:
            return {
                ...state,
                loginTime: payload
            }
        default :
            return state;
    }
}