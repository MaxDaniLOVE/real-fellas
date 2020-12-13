import * as T from '../constants';
import axios from 'axios';

export const registerUser = () => async (dispatch, getState) => {
     await axios.get('http://localhost:8080/test')
}

export const signIn = () => (dispatch, getState) => {
    console.log('SIGN IN')
}

export const signOut = () => (dispatch, getState) => {
    console.log('SIGN OUT')
}