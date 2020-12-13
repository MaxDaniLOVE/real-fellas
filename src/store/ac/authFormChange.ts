import * as T from '../constants';

export const authFormChange = ({ target: { value, id } }) => {
    return { type: T.CHANGE_LOGIN_FORM, payload: { [id]: value } };
}