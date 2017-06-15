import axios from 'axios';
import * as types from '../constants/actionTypes';

export const fetchPosts = () => dispatch => {
  dispatch({ type: types.FETCH_POSTS });
  axios.get('http://localhost:3000/posts')
  .then(({ data }) => {
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts: data });
  })
  .catch((error) => {
    dispatch({ type: types.FETCH_POSTS_FAILURE, error });
  });
}
