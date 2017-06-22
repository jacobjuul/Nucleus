import { combineReducers } from 'redux';
import R                   from 'ramda';
import * as types          from '../constants/actionTypes';

// normalizePosts :: [Object] -> Object
const normalize = R.indexBy(R.prop('id'));

// TODO: get these from asyncStorage
const initialPosts = {};
const initialBookmarks = {};
const initialComments = {};
const initialUsers = {};

const posts = (state = initialPosts, action: Object) => {
  switch(action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return normalize(action.posts)
    }

    default: {
      return state;
    }
  }
}

const bookmarks = (state = initialBookmarks, action) => {
  return state;
};

const users = (state = initialUsers, action) => {
  if (action.type === types.FETCH_USERS_SUCCESS) {
    return normalize(action.users)
  }
  return state;
};

const comments = (state = initialComments, action) => {
  return state;
};

const entitiesReducer = combineReducers({
  posts,
  bookmarks,
  comments,
  users
});


export default entitiesReducer;
