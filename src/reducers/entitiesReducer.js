import { combineReducers } from 'redux';
import R from 'ramda';
import { normalize, schema } from 'normalizr';
import * as types from '../constants/actionTypes';

// normalizePosts :: [Object] -> Object
const normalizePosts = R.indexBy(R.prop('id'));

// TODO: get these from asyncStorage
const initialPosts = {};

export const posts = (state = initialPosts, action: Object) => {
  switch(action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return normalizePosts(action.posts)
    }

    default: {
      return state;
    }
  }
}


const entitiesReducer = combineReducers({
  posts
});


export default entitiesReducer;
