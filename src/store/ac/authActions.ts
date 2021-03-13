import * as T from '../constants';
import axios from 'axios';
import { showSpinner, hideSpinner } from './spinnerActions';
import { ThunkActionCreator } from '../../types';
import { resetMessages } from './resetMessages';
import { throwError } from './errorActions';

export const registerUser = (): ThunkActionCreator => async (dispatch, getState) => {
	const { auth: { password, email, userName } } = getState();
	dispatch(showSpinner());
	try {
		const { data } = await axios.post('/user/sign-up', { password, email, userName });
		dispatch({ type: T.SIGN_UP + T.SUCCESS, payload: { ...data } });
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};

export const signIn = (): ThunkActionCreator => async (dispatch, getState) => {
	const { auth: { password, email } } = getState();
	dispatch(showSpinner());
	try {
		const { data } = await axios.post('/user/sign-in', { password, email });
		dispatch({ type: T.SIGN_IN + T.SUCCESS, payload: { ...data } });
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};

export const signOut = (): ThunkActionCreator => async dispatch => {
	dispatch(showSpinner());
	try {
		await axios.get('/user/sign-out');
		dispatch({ type: T.SIGN_OUT + T.SUCCESS });
		axios.defaults.headers.common['Authorization'] = '';
		dispatch(resetMessages());
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};