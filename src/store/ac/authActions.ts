import * as T from '../constants';
import axios from 'axios';

export const registerUser = () => async (dispatch, getState) => {
    const { auth: { password, email } } = getState();
    try {
        const { data } = await axios.post('/user/sign-up', { password, email });
        dispatch({ type: T.SIGN_UP + T.SUCCESS, payload: { ...data } });
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
    } catch (err) {
        dispatch({ type: T.SIGN_UP + T.ERROR });
    }
}

export const signIn = () => async (dispatch, getState) => {
    const { auth: { password, email } } = getState();
    try {
        const { data } = await axios.post('/user/sign-in', { password, email });
        dispatch({ type: T.SIGN_IN + T.SUCCESS, payload: { ...data } });
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
    } catch (err) {
        dispatch({ type: T.SIGN_IN + T.ERROR });
    }
}

export const signOut = () => async dispatch => {
    try {
        await axios.get('/user/sign-out');
        dispatch({ type: T.SIGN_OUT + T.SUCCESS });
        axios.defaults.headers.common['Authorization'] = '';
    } catch (err) {
        dispatch({ type: T.SIGN_OUT + T.ERROR });
    }
}