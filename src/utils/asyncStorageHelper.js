import { AsyncStorage } from 'react-native'
import R from 'ramda'

export const setValue = R.curry(async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    return error
  }
})

export const getValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return JSON.parse(value)
  } catch (error) {
    throw error
  }
}
