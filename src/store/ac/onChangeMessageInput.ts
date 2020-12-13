import * as T from '../constants';

const onChangeMessageInput = ({ target: { value } }) => 
  ({ type: T.ON_CHANGE_MESSAGE, payload: { message: value } });

export default onChangeMessageInput;