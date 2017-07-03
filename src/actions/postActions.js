import * as types from '../constants/actionTypes'
import api        from '../utils/apiHelper'

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: types.FETCH_POSTS })
  try {
    const posts = await api.get.posts()
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts: posts.hits });
  } catch (error) {
    dispatch({ type: types.FETCH_POSTS_FAILURE, error })
  }
}

export const searchFilter = filter => async (dispatch) => {
  dispatch({ type: types.SEARCH_INIT })

  try {
    const results = await api.get.posts(filter)
    dispatch({ type: types.SEARCH_SUCCESS, results })
  } catch (error) {
    dispatch({ type: types.SEARCH_FAILURE, error })
  }
}

export const bookmarkPost = ({ currentUser, postId }) => {
  api.create.bookmark({ user_id: currentUser.id, post_id: postId })
    .then(console.log)
    .catch(console.error)

  // Optimistic ui update
  return { type: types.BOOKMARK_POST, currentUser, postId }
}

