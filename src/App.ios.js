/* eslint-disable no-unused-vars */
import React, { Component }  from 'react'
import { Navigation }        from 'react-native-navigation'
import { Provider, connect } from 'react-redux'
import { AsyncStorage }      from 'react-native'
import configureStore        from './store/configureStore'
import { registerScreens }   from './screens/registerScreens'
import * as appActions       from './actions/appActions'
import { colors, navigatorStyle } from './constants/styles'
import { getValue, setValue } from './utils/asyncStorageHelper'

const iconInsets = { // add this to change icon position (optional, iOS only).
  top: 6, // optional, default is 0.
  left: 0, // optional, default is 0.
  bottom: -6, // optional, default is 0.
  right: 0 // optional, default is 0.
}

const store = configureStore()

registerScreens(store, Provider)

class App {
  constructor() {
    // setValue('@nukestore:currentUser', null) // for debug
    store.subscribe(this.onStoreUpdate.bind(this))
    getValue('@nukestore:currentUser').then((user) => {
      store.dispatch(appActions.appInitialized(user && 'after-login'))
    })
  }

  onStoreUpdate = () => {
    const { root } = store.getState().app
    if (this.currentRoot !== root) {
      this.currentRoot = root
      this.startApp(root)
    }
  }

  startApp = (root) => {
    switch (root) {
      case 'login': {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'nuke.login',
            title: '',
            navigatorStyle: { navBarHidden: true },
          },
        })
        return
      }

      case 'after-login': {
        Navigation.startTabBasedApp({
          tabs: [{
            screen: 'nuke.feed',
            icon: require('./assets/icons/home-deactive.png'),
            selectedIcon: require('./assets/icons/home-active.png'),
            title: 'Business updates',
            navigatorStyle,
            iconInsets,
            navigatorButtons: {
              rightButtons: [{
                title: '',
                id: 'newsfeed.nav.bookmark',
                icon: require('./assets/icons/Bookmark.png')
              }],
              leftButtons: [{
                title: '',
                id: 'newsfeed.nav.search',
                icon: require('./assets/icons/Search.png')
              }]
            }
          }, {
            screen: 'nuke.leadership',
            icon: require('./assets/icons/Users-deaktive.png'),
            selectedIcon: require('./assets/icons/Users-active.png'),
            title: 'Leadership',
            navigatorStyle,
            iconInsets
          }, {
            screen: 'nuke.notready',
            icon: require('./assets/icons/toolbox-deactive.png'),
            selectedIcon: require('./assets/icons/toolbox-active.png'),
            title: 'Toolbox',
            navigatorStyle,
            iconInsets
          }, {
            screen: 'nuke.notready',
            icon: require('./assets/icons/meetings-deactive.png'),
            selectedIcon: require('./assets/icons/meetings-active.png'),
            title: 'Quarterly Meetings',
            navigatorStyle,
            iconInsets
          }],
          tabsStyle: {
            tabBarButtonColor: 'rgba(255,255,255,0.9)',
            tabBarSelectedButtonColor: 'none',
            tabBarBackgroundColor: colors.tabBar
          }
        })
        return
      }

      default: {
        console.error('Uknown root', root)
      }
    }
  }

  // authenticate = async () => {
  //   try {
  //     const user = await AsyncStorage.getItem('@nukestore:currentUser')
  //     user ? startTabApp({ user }) : startLogin()
  //   } catch (error) {
  //     startLogin({ error })
  //   }
  // }
}

export default App
