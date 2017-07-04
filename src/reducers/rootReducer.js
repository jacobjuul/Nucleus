// @flow
import { combineReducers } from 'redux'
import users, * as fromUsers from './usersReducer'
import app                 from './appReducer'
import posts               from './postsReducer'
import entities            from './entitiesReducer'
import session             from './sessionReducer'

const rootReducer = combineReducers({
  users,
  posts,
  entities,
  session,
  app,
})

export const getPostBookmarksForUser = (state, userId) =>
  fromUsers.getPostBookmarksForUser(state.entities.users, userId)

export default rootReducer
