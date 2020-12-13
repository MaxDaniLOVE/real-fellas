import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combinedReducer from './reducers';

const composeEnhancers = compose;

const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;