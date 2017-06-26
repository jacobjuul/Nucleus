/* eslint-disable no-unused-vars */
import React, { Component }       from 'react'
import { Provider, connect }      from 'react-redux'
import { Navigation }             from 'react-native-navigation'
import { registerScreens }        from './screens/registerScreens'
import configureStore             from './store/configureStore'
import { colors, navigatorStyle } from './constants/styles'

const store = configureStore()

registerScreens(store, Provider)

const iconInsets = { // add this to change icon position (optional, iOS only).
  top: 6, // optional, default is 0.
  left: 0, // optional, default is 0.
  bottom: -6, // optional, default is 0.
  right: 0 // optional, default is 0.
}

class App extends Component {
  constructor() {
    super()
    this.startApp()
  }

  startApp() {
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
  }
}

export default App
