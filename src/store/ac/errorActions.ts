import * as T from '../constants';
import { ErrorState, ThunkActionCreator } from '../../types';

export const throwError = (err: any): ThunkActionCreator => async dispatch => {
	const status = err.response?.status || 500;
	const message = err.response?.data?.message || 'Something went wrong';
	const error: ErrorState = { status, message };
	dispatch({ type: T.THROW_ERROR, payload: error });
};

export const closeError = (): ThunkActionCreator => async dispatch => {
	dispatch({ type: T.CLOSE_ERROR });
};