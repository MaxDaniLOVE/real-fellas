import * as T from '../constants';
import { ThunkActionCreator } from '../../types';
import { throwError } from './errorActions';

const initSocket = (ws): ThunkActionCreator => (dispatch, getState) => {
	ws.onopen = (e) => {
		dispatch({ type: T.INIT_WS + T.SUCCESS });
	};
	ws.onerror = (error) => {
		dispatch(throwError(error));
	};
	ws.onmessage = ({ data }) => {
		const { data : { messages } } = getState();
		const payload = JSON.parse(data);
		const updatedMessages = Array.isArray(payload) ? [ ...messages, ...payload ] : [ ...messages, payload ];
		dispatch({ type: T.MESSAGE_RECEIVE, payload: { messages: updatedMessages } });
	};
};

export default initSocket;
