import { combineReducers } from 'redux';
import { normalize, schema } from 'normalizr';
import * as types from '../constants/actionTypes';

const normalizePosts = posts => {
  const postSchema = new schema.Entity('posts');
  const postListSchema = [postSchema];
  return normalize(posts, postListSchema);
};

// TODO: get these from asyncStorage
const initialPosts = {};

export const posts = (state = initialPosts, action: Object) => {
  switch(action.type) {
    case types.FETCH_POSTS: {
      return {
        ...state,
        loading: true,
        fetched: false,
      };
    };

    case types.FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        fetched: true,
        ...normalizePosts(action.posts)
      };
    };

    case types.FETCH_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        fetched: false,
        error: action.error
      };
    }

    default: {
      return state;
    };
  }
}


const entitiesReducer = combineReducers({
  posts
});


export default entitiesReducer;
