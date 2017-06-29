import { AsyncStorage } from 'react-native'
import * as types from '../constants/actionTypes'
import api from '../utils/apiHelper'
import { startTabApp } from '../screens/registerScreens'

export const getUserFromAsyncStorage = () => async (dispatch) => {
  try {
    const user = await AsyncStorage.getItem('@nukestore:currentUser')
    if (user) {
      dispatch({ type: types.USER_FROM_STORAGE, user })
    }
  } catch (error) {
    console.log(error)
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_INIT })
  try {
    const user = await api.user.login({ email, password})
    if (user) {
      dispatch({ type: types.USER_LOGIN_SUCCESS, user })
      startTabApp()
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE, error })
  }
}

