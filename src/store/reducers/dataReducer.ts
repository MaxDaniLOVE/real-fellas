import * as T from '../constants';
import { DataState } from '../../types';

const initialState: DataState = {
	messages: [],
	message: '',
	isOpenedConnection: false,
	lastMessage: '',
	showSpinner: false,
};

const dataReducer = (state: DataState = initialState, { type, payload }): DataState => {
	switch (type) {
	case T.INIT_WS + T.SUCCESS:
	case T.INIT_WS + T.ERROR:
		return { ...state, isOpenedConnection: true };
	case T.ON_CHANGE_MESSAGE:
	case T.MESSAGE_RECEIVE:
	case T.SHOW_SPINNER:
	case T.HIDE_SPINNER:
		return { ...state, ...payload };
	case T.RESET_MESSAGES:
		return initialState;
	default:
		return state;
	}
};

export default dataReducer;