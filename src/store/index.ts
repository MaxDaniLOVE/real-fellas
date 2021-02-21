import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combinedReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;