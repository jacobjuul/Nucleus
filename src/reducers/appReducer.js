import * as types from '../constants/actionTypes'

const initialState = {
  root: undefined // 'login' / 'after-login'
}

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROOT_CHANGED: {
      return {
        ...state,
        root: action.root
      }
    }

    default: {
      return state;
    }
  }
}
