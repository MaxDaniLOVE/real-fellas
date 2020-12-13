import * as T from '../constants';

export const switchRegisterMode = () => (dispatch, getState) => {
    const { auth: { isRegisterMode } } = getState();
    dispatch({ type: T.SWITCH_REGISTER_MODE, payload: { isRegisterMode: !isRegisterMode } })
}