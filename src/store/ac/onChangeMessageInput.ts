import * as T from '../constants';
import { DefaultActionCreator } from '../../types';

const onChangeMessageInput: DefaultActionCreator = ({ target: { value } }) =>
  ({ type: T.ON_CHANGE_MESSAGE, payload: { message: value } });

export default onChangeMessageInput;