import * as T from '../constants';
import { AuthState } from '../../types';

const initialState: AuthState = {
	isRegisterMode: false,
	email: '',
	password: '',
	userName: '',
};

const authReducer = (state: AuthState = initialState, { type, payload }): AuthState => {
	switch (type) {
	case T.CHANGE_LOGIN_FORM:
	case T.SWITCH_REGISTER_MODE:
		return { ...state, ...payload };
	case T.SIGN_IN + T.SUCCESS:
	case T.SIGN_UP + T.SUCCESS:
		return initialState;
	default:
		return state;
	}
};

export default authReducer;