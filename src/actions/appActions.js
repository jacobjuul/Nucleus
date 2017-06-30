import * as types from '../constants/actionTypes'
import api from '../utils/apiHelper'
import { setValue } from '../utils/asyncStorageHelper'

export const appInitialized = (root) => (dispatch) => {
    if (root == null) root = 'login'
    dispatch(changeAppRoot(root))
}

export const changeAppRoot = root => ({ type: types.ROOT_CHANGED, root })

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_INIT })
  try {
    const user = await api.user.login({ email, password })
    if (user) {
      dispatch({ type: types.USER_LOGIN_SUCCESS, user: user.data })
      dispatch(changeAppRoot('after-login'))
      setValue('@nukestore:currentUser', user.data)
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE, error })
  }
}

