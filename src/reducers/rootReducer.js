// @flow
import { combineReducers } from 'redux';
import session             from './sessionReducer';
import posts               from './postsReducer';
import entities            from './entitiesReducer';

const rootReducer = combineReducers({
  session,
  posts,
  entities
});

export default rootReducer;
