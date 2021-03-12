import * as T from '../constants';
import { ErrorState } from '../../types';

const initialState: ErrorState = {} as ErrorState;

const errorReducer = (state: ErrorState = initialState, { type, payload }) => {
  switch (type) {
    case T.THROW_ERROR:
      return payload;
    case T.CLOSE_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;