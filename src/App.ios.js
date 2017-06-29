/* eslint-disable no-unused-vars */
import React, { Component }       from 'react'
import { Provider, connect }      from 'react-redux'
import { AsyncStorage }           from 'react-native'
import { Navigation }             from 'react-native-navigation'
import { registerScreens, startTabApp }        from './screens/registerScreens'
import configureStore             from './store/configureStore'

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
      user ? startTabApp() : this.startLogin()
    } catch (error) {
      console.log(error)
    }
  }

  startLogin = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'nuke.login',
        title: '',
        navigatorStyle: { navBarHidden: true },
      },
    })
  }
}

export default App
