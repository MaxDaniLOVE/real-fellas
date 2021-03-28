import * as T from '../constants';
import axios from 'axios';
import { showSpinner, hideSpinner } from './spinnerActions';
import { ThunkActionCreator } from '../../types';
import { resetMessages } from './resetMessages';
import { throwError } from './errorActions';

export const registerUser = (): ThunkActionCreator => async (dispatch, getState): Promise<void> => {
	const { auth: { password, email, userName } } = getState();
	dispatch(showSpinner());
	try {
		const { data } = await axios.post('/user/sign-up', { password, email, userName });
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
		dispatch({ type: T.SIGN_UP + T.SUCCESS, payload: { ...data } });
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};

export const signIn = (): ThunkActionCreator => async (dispatch, getState): Promise<void> => {
	const { auth: { password, email } } = getState();
	dispatch(showSpinner());
	try {
		const { data } = await axios.post('/user/sign-in', { password, email });
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
		dispatch({ type: T.SIGN_IN + T.SUCCESS, payload: { ...data } });
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};

export const signOut = (): ThunkActionCreator => async (dispatch): Promise<void> => {
	dispatch(showSpinner());
	try {
		await axios.get('/user/sign-out');
		axios.defaults.headers.common['Authorization'] = '';
		dispatch({ type: T.SIGN_OUT + T.SUCCESS });
		dispatch(resetMessages());
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};