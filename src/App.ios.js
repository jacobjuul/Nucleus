/* eslint-disable no-unused-vars */
import React, { Component }  from 'react'
import { Navigation }        from 'react-native-navigation'
import { Provider, connect } from 'react-redux'
import { AsyncStorage }      from 'react-native'
import configureStore        from './store/configureStore'
import {
  registerScreens,
  startTabApp,
  startLogin }               from './screens/registerScreens'

const store = configureStore()

registerScreens(store, Provider)

class App extends Component {
  constructor() {
    super()
    this.authenticate()
  }

  authenticate = async () => {
    try {
      const user = await AsyncStorage.getItem('@nukestore:currentUser')
      user ? startTabApp({ user }) : startLogin()
    } catch (error) {
      startLogin({ error })
    }
  }
}

export default App
