// @flow
import { combineReducers } from 'redux'
import users               from './usersReducer'
import posts               from './postsReducer'
import entities            from './entitiesReducer'

const rootReducer = combineReducers({
  users,
  posts,
  entities
})

export default rootReducer
