/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

let midWare = [thunk];

if (__DEV__) {

  midWare = [...midWare, logger];
} else {
  midWare = [...midWare];
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    // initialState,
    applyMiddleware(...midWare)
  );
}
