import * as types from '../constants/actionTypes'

const initialState = {
  root: undefined, // 'login' / 'after-login'
  authToken: undefined
}

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROOT_CHANGED: {
      return {
        ...state,
        root: action.root
      }
    }

    case types.SET_AUTH_TOKEN: {
      return {
        ...state,
        authToken: action.token
      }
    }

    default: {
      return state
    }
  }
}
