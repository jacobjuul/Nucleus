import axios from 'axios';
import * as types from '../constants/actionTypes';
import api from '../utils/apiHelper';

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: types.FETCH_POSTS });
  api.posts().then((content, error) => {
    console.log(content.hits);
    dispatch({
      type: error ? types.FETCH_POSTS_FAILURE : types.FETCH_POSTS_SUCCESS,
      posts: !error && content.hits,
      error
    });
  });
};

