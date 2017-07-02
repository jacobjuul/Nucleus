import { combineReducers } from 'redux'
import R                   from 'ramda'
import * as types          from '../constants/actionTypes'

// normalizePosts :: [Object] -> Object
const normalize = R.indexBy(R.prop('id'))

// TODO: get these from asyncStorage
const initialPosts = {}
const initialUsers = {}

const bookmarks = (state, action) => {
  const isBookmarked = R.any(b => b.id === action.currentUser.id)
  switch (action.type) {
    case types.BOOKMARK_POST: {
      if (isBookmarked(state)) {
        return state.filter((i) => i.id !== action.currentUser.id)
      }
      return [...state, action.currentUser]
    }
    default: {
      return state
    }
  }
}

const post = (state, action) => {
  switch (action.type) {
    case types.BOOKMARK_POST: {
      return {
        ...state,
        bookmark_users: bookmarks(state.bookmark_users, action)
      }
    }

    default: {
      return state
    }
  }
}

const posts = (state = initialPosts, action) => {
  switch(action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return normalize(action.posts)
    }

    case types.BOOKMARK_POST: {
      return {
        ...state,
        [action.postId]: post(state[action.postId], action)
      }
    }

    default: {
      return state
    }
  }
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
