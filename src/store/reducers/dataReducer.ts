import * as T from '../constants';

export interface DataState {
  messages: string[],
  message: string,
  isOpenedConnection: boolean,
  lastMessage: string,
}

const initialState: DataState = {
  messages: [],
  message: '',
  isOpenedConnection: false,
  lastMessage: '',
};

const dataReducer = (state: DataState = initialState, { type, payload }) => {
  switch (type) {
    case T.INIT_WS + T.SUCCESS:
    case T.INIT_WS + T.ERROR:
      return { ...state, isOpenedConnection: true };
    case T.ON_CHANGE_MESSAGE:
    case T.MESSAGE_RECEIVE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default dataReducer;