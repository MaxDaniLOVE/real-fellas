import * as T from '../constants';

const initialState = {
    isLoggedIn: false,
    isRegisterMode: false,
    email: '',
    password: '',
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case T.CHANGE_LOGIN_FORM:
        case T.SWITCH_REGISTER_MODE:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default authReducer;