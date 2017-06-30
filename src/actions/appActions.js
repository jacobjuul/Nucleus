import * as types from '../constants/actionTypes'

export const appInitialized = () => (dispatch) => {
    dispatch(changeAppRoot('login'))
}

export const changeAppRoot = root => ({ type: types.ROOT_CHANGED, root })


export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_INIT })
  try {
    const user = await api.user.login({ email, password })
    if (user) {
      dispatch({ type: types.USER_LOGIN_SUCCESS, user })
      dispatch(changeAppRoot('after-login'))
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE, error })
  }
}

