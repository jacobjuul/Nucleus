import * as types from '../constants/actionTypes'

const initialState = {
  currentUser: undefined,
  loggingIn: false,
  loginError: undefined,
}

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_INIT: {
      return {
        ...state,
        loggingIn: true,
        loginError: undefined,
      }
    }

    case types.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        loginError: undefined,
        currentUser: action.user
      }
    }

    case types.USER_LOGIN_FAILURE: {
      return {
        ...state,
        currentUser: undefined,
        loggingIn: false,
        loginError: action.error
      }
    }

    case types.USER_FROM_STORAGE: {
      return {
        ...state,
        currentUser: action.user,
      }
    }

    default: {
      return state
    }
  }
}

export default sessionReducer
