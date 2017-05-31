import * as types from '../constants/actionTypes';
import { normalize, schema } from 'normalizr';

const normalizePosts = posts => {
  const postSchema = new schema.Entity('posts');
  const postListSchema = [postSchema];
  return normalize(posts, postListSchema);
};

const initialState = {
    result: {},
    entities: {},
    loading: false,
    fetched: false
};

export const postsReducer = (state = initialState, action: Object) => {
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



export default postsReducer;
