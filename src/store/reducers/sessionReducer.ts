import * as T from '../constants';
import { SessionState } from '../../types';

const initialState: SessionState = {
	isLoggedIn: false,
	email: '',
	userName: '',
	id: '',
	avatar: '',
};

const sessionReducer = (state: SessionState = initialState, { type, payload }): SessionState => {
	switch (type) {
	case T.SIGN_UP + T.SUCCESS:
	case T.SIGN_IN + T.SUCCESS:
		return { ...state, ...payload, isLoggedIn: true };
	case T.SIGN_OUT + T.SUCCESS:
		return { ...initialState };
	case T.SWITCH_REGISTER_MODE:
	case T.UPDATE_AVATAR + T.SUCCESS:
		return { ...state, ...payload };
	default:
		return state;
	}
};

export default sessionReducer;