  import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combinedReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;