import * as types from '../constants/actionTypes';
import api        from '../utils/apiHelper';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: types.FETCH_POSTS });
  try {
    const posts = await api.posts();
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts: posts.hits });
  } catch (error) {
    dispatch({
      type: types.FETCH_POSTS_FAILURE,
      error
    });
  }
};

