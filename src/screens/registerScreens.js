/* eslint-disable import/prefer-default-export */
import { Navigation }     from 'react-native-navigation'
import LeadershipScreen   from './LeadershipScreen'
import FeedScreen         from './FeedScreen'
import PostScreen         from './PostScreen'
import WriteCommentScreen from './WriteCommentScreen'
import PostSearchScreen   from './PostSearchScreen'
import LoginScreen        from './LoginScreen'
import NotReady           from './NotReady'
import { colors, navigatorStyle } from '../constants/styles'

const iconInsets = { // add this to change icon position (optional, iOS only).
  top: 6, // optional, default is 0.
  left: 0, // optional, default is 0.
  bottom: -6, // optional, default is 0.
  right: 0 // optional, default is 0.
}

export function registerScreens(store, Provider) {
  Navigation.registerComponent('nuke.login', () => LoginScreen, store, Provider)
  Navigation.registerComponent('nuke.feed', () => FeedScreen, store, Provider)
  Navigation.registerComponent('nuke.postscreen', () => PostScreen, store, Provider)
  Navigation.registerComponent('nuke.leadership', () => LeadershipScreen, store, Provider)
  Navigation.registerComponent('nuke.writecomment', () => WriteCommentScreen, store, Provider)
  Navigation.registerComponent('nuke.posts.searchscreen', () => PostSearchScreen, store, Provider)
  Navigation.registerComponent('nuke.notready', () => NotReady, store, Provider)
}

export const startLogin = ({ error }) => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'nuke.login',
      title: '',
      passProps: { error },
      navigatorStyle: { navBarHidden: true },
    },
  })
}

export const startTabApp = ({ user }) => {
  Navigation.startTabBasedApp({
    tabs: [{
      screen: 'nuke.feed',
      icon: require('../assets/icons/home-deactive.png'),
      selectedIcon: require('../assets/icons/home-active.png'),
      title: 'Business updates',
      navigatorStyle,
      iconInsets,
      passProps: { currentUser: user },
      navigatorButtons: {
        rightButtons: [{
          title: '',
          id: 'newsfeed.nav.bookmark',
          icon: require('../assets/icons/Bookmark.png')
        }],
        leftButtons: [{
          title: '',
          id: 'newsfeed.nav.search',
          icon: require('../assets/icons/Search.png')
        }]
      }
    }, {
      screen: 'nuke.leadership',
      icon: require('../assets/icons/Users-deaktive.png'),
      selectedIcon: require('../assets/icons/Users-active.png'),
      title: 'Leadership',
      navigatorStyle,
      iconInsets
    }, {
      screen: 'nuke.notready',
      icon: require('../assets/icons/toolbox-deactive.png'),
      selectedIcon: require('../assets/icons/toolbox-active.png'),
      title: 'Toolbox',
      navigatorStyle,
      iconInsets
    }, {
      screen: 'nuke.notready',
      icon: require('../assets/icons/meetings-deactive.png'),
      selectedIcon: require('../assets/icons/meetings-active.png'),
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
