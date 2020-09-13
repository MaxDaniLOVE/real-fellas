import * as T from '../constants';

const initialState = {
  messages: [],
  message: '',
  isOpenedConnection: false,
  lastMessage: '',
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case T.INIT_WS + T.SUCCESS:
    case T.INIT_WS + T.ERROR:
      return { ...state, isOpenedConnection: true };
    case T.ON_CHANGE_MESSAGE:
    case T.MESSAGE_RECIEVE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default dataReducer;