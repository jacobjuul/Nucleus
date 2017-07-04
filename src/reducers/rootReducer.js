// @flow
import { combineReducers } from 'redux'
import users               from './usersReducer'
import app                 from './appReducer'
import posts               from './postsReducer'
import entities, * as fromEntities            from './entitiesReducer'
import session             from './sessionReducer'

const rootReducer = combineReducers({
  users,
  posts,
  entities,
  session,
  app,
})

export const getPostBookmarksForUser = (state, userId) =>
  fromEntities.getPostBookmarksForUser(state.entities, userId)

export default rootReducer
