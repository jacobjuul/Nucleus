// @flow
import { combineReducers } from 'redux'
import users               from './usersReducer'
import posts               from './postsReducer'
import entities            from './entitiesReducer'
import session             from './sessionReducer'

const rootReducer = combineReducers({
  users,
  posts,
  entities,
  session
})

export default rootReducer
