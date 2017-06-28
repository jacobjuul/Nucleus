import { AsyncStorage } from 'react-native'
import * as types from '../constants/actionTypes'

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

