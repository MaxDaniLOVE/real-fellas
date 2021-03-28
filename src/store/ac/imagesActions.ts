import { ThunkActionCreator } from '../../types';
import { hideSpinner, showSpinner } from './spinnerActions';
import axios from 'axios';
import * as T from '../constants';
import { throwError } from './errorActions';

export const onPostNewAvatar = (formData): ThunkActionCreator => async (dispatch): Promise<void> => {
	dispatch(showSpinner());
	try {
		const { data } = await axios.put('/user/logged/avatar', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		dispatch({ type: T.UPDATE_AVATAR + T.SUCCESS, payload: { ...data } });
	} catch (err) {
		dispatch(throwError(err));
	}
	dispatch(hideSpinner());
};