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
    const res = await api.user.login({ email, password })
    if (res) {
      dispatch({ type: types.USER_LOGIN_SUCCESS, user: res.data.data })
      dispatch({ type: types.SET_AUTH_TOKEN, headers: res.headers })
      setValue('@nukestore:currentUser', res.data.data)
      setValue('@nukestore:headers', res.headers)
        .then(() => // make sure we have the token before starting
          dispatch(changeAppRoot('after-login'))
        )
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE, error })
  }
}

