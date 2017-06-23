import { combineReducers } from 'redux'
import R                   from 'ramda'
import * as types          from '../constants/actionTypes'

// normalizePosts :: [Object] -> Object
const normalize = R.indexBy(R.prop('id'))

// TODO: get these from asyncStorage
const initialPosts = {}
const initialUsers = {}

const posts = (state = initialPosts, action: Object) => {
  if (action.type === types.FETCH_POSTS_SUCCESS) {
    return normalize(action.posts)
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
  users
})


export default entitiesReducer
