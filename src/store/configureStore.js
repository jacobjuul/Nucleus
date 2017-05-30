// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

let midWare: Object[] = [thunk];

if (__DEV__) {

  midWare = [...midWare, logger];
} else {
  midWare = [...midWare];
}

export default function configureStore(initialState: Object) {
  return createStore(
    rootReducer,
    // initialState,
    applyMiddleware(...midWare)
  );
}
