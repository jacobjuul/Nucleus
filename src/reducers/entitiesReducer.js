import { combineReducers } from 'redux';
import R                   from 'ramda';
import * as types          from '../constants/actionTypes';

// normalizePosts :: [Object] -> Object
const normalizePosts = R.indexBy(R.prop('id'));

// TODO: get these from asyncStorage
const initialPosts = {};
const initialBookmarks = {};
const initialComments = {};

const posts = (state = initialPosts, action: Object) => {
  switch(action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return normalizePosts(action.posts)
    }

    default: {
      return state;
    }
  }
}

const bookmarks = (state = initialBookmarks, action) => {
  return state;
}

const comments = (state = initialComments, action) => {
  return state;
}

const entitiesReducer = combineReducers({
  posts,
  bookmarks,
  comments
});


export default entitiesReducer;
