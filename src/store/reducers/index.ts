import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import authReducer from './authReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
  session: sessionReducer,
});

export default rootReducer

type ReducerType = typeof rootReducer;

export type AppStateType = ReturnType<ReducerType>