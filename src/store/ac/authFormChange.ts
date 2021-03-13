import * as T from '../constants';
import { DefaultActionCreator } from '../../types';

export const authFormChange: DefaultActionCreator= ({ target: { value, id } }) => {
	return { type: T.CHANGE_LOGIN_FORM, payload: { [id]: value } };
};