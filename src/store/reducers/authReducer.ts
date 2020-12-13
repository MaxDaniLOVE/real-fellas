import * as T from '../constants';

export interface AuthState {
    isLoggedIn: boolean,
    isRegisterMode: boolean,
    email: string,
    password: string,
}


const initialState: AuthState = {
    isLoggedIn: false,
    isRegisterMode: false,
    email: '',
    password: '',
};

const authReducer = (state: AuthState = initialState, { type, payload }) => {
    switch (type) {
        case T.CHANGE_LOGIN_FORM:
        case T.SWITCH_REGISTER_MODE:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default authReducer;