// @flow
import { combineReducers } from 'redux';
import session from './sessionReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  session,
  posts
});

export default rootReducer;
