import * as T from '../constants';
import { AuthState } from '../../types';

const initialState: AuthState = {
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