import * as T from '../constants';
import axios from 'axios';

export const registerUser = () => async (dispatch, getState) => {
     await axios.post('http://localhost:8080/user/register', {})
}

export const signIn = () => (dispatch, getState) => {
    console.log('SIGN IN')
}

export const signOut = () => (dispatch, getState) => {
    console.log('SIGN OUT')
}