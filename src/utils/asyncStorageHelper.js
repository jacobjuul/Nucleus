import { AsyncStorage } from 'react-native'
import R from 'ramda'

export const setValue = R.curry(async (key, value) => {
  try {
    const val = typeof value === 'string' ? value : JSON.stringify(value)
    await AsyncStorage.setItem(key, val)
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

export const removeValue = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    throw error
  }
}
