import * as T from '../constants';
import { ThunkActionCreator } from '../../types';

export const switchRegisterMode = (): ThunkActionCreator => (dispatch, getState) => {
    const { auth: { isRegisterMode } } = getState();
    dispatch({ type: T.SWITCH_REGISTER_MODE, payload: { isRegisterMode: !isRegisterMode } })
}