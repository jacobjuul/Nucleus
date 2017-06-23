import * as types from '../constants/actionTypes'

const initialState = {
  loading: false,
  fetched: false,
  error: undefined
}

export const usersReducer = (state = initialState, action: Object) => {
  switch(action.type) {
    case types.FETCH_USERS: {
      return {
        ...state,
        loading: true,
        fetched: false,
      }
    }

    case types.FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        fetched: true,
      }
    }

    case types.FETCH_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        fetched: false,
        error: action.error
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer
