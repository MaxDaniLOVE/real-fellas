import { ThunkActionCreator } from '../../types';
import { hideSpinner, showSpinner } from './spinnerActions';
import axios from 'axios';
import * as T from '../constants';
import { throwError } from './errorActions';

export const onPostNewAvatar = (formData): ThunkActionCreator => async (dispatch): Promise<void> => {
	dispatch(showSpinner());
	try {
		const { data: { avatar } } = await axios.put('/user/logged/avatar', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		dispatch({ type: T.UPDATE_AVATAR + T.SUCCESS, payload: { avatar: `${avatar}?${new Date().getTime()}` } });
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};

export const onDeleteAvatar = () => async (dispatch): Promise<void> => {
	dispatch(showSpinner());
	try {
		await axios.delete('/user/logged/avatar');
		dispatch({ type: T.UPDATE_AVATAR + T.SUCCESS, payload: { avatar: null } });
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};