import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import authReducer from './authReducer';
import sessionReducer from './sessionReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
	data: dataReducer,
	auth: authReducer,
	session: sessionReducer,
	error: errorReducer,
});

export default rootReducer;

type ReducerType = typeof rootReducer;

export type AppStateType = ReturnType<ReducerType>