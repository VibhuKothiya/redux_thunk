
import {thunk} from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux'
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))