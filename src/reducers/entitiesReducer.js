import { combineReducers } from 'redux'
import R                   from 'ramda'
import * as types          from '../constants/actionTypes'

// normalizePosts :: [Object] -> Object
const normalize = R.indexBy(R.prop('id'))

// TODO: get these from asyncStorage
const initialPosts = {}
const initialUsers = {}

const createBookmarkLens = R.curry((postId, length) => {
  if (length == null) {
    return R.lensPath([postId, 'bookmark_users'])
  }
  return R.lensPath([postId, 'bookmark_users', length])
})

const bookmarks = (bookmarks, currentUser) => {
  const isBookmarked = R.any(b => b.id === currentUser.id)
  if (isBookmarked(bookmarks)) {
    return bookmarks.filter((i) => i.id !== currentUser.id)
  }
  return [...bookmarks, currentUser]
}

const post = (post, { currentUser, postId }) => {
  return {
    ...post,
    bookmark_users: bookmarks(post.bookmark_users, currentUser)
  }
}

const posts = (state = initialPosts, action) => {
  const postBookmarkLens = createBookmarkLens(action.postId)
  const bookmarkArrLens = postBookmarkLens(undefined)

  if (action.type === types.FETCH_POSTS_SUCCESS) {
    return normalize(action.posts)
  }

  if (action.type === types.BOOKMARK_POST) {
    return {
      ...state,
      [action.postId]: post(state[action.postId], ({ currentUser: action.currentUser }))
    }
  }

  return state
}

const users = (state = initialUsers, action) => {
  if (action.type === types.FETCH_USERS_SUCCESS) {
    return normalize(action.users)
  }
  return state
}

const entitiesReducer = combineReducers({
  posts,
  users,
})


export default entitiesReducer
