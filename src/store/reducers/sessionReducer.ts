import * as T from '../constants';

export interface sessionState {
    isLoggedIn: boolean,
    email: string,
    userName: string,
    authToken: string,
}

const initialState: sessionState = {
    isLoggedIn: false,
    email: '',
    userName: '',
    authToken: '',
};

const sessionReducer = (state: sessionState = initialState, { type, payload }) => {
    switch (type) {
        case T.SIGN_UP + T.SUCCESS:
        case T.SIGN_IN + T.SUCCESS:
            return { ...state, ...payload, isLoggedIn: true };
        case T.SIGN_OUT + T.SUCCESS:
            return { ...state, ...payload, isLoggedIn: false };
        case T.SWITCH_REGISTER_MODE:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default sessionReducer;