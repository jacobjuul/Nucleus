/* eslint-disable no-unused-vars */
import React, { Component }   from 'react';
import { Provider, connect }  from 'react-redux';
import { Navigation }         from 'react-native-navigation';
import { registerScreens }    from './screens/registerScreens';
import configureStore         from './store/configureStore';
import { colors }             from './constants/styles';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
  navBarTranslucent: false,
  navBarBackgroundColor: colors.primary,
  drawUnderNavBar: false,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: false,
  navBarTextFontSize: 13,
  navBarTextFontWeight: 400,
  navBarNoBorder: true
};

const iconInsets = { // add this to change icon position (optional, iOS only).
  top: 6, // optional, default is 0.
  left: 0, // optional, default is 0.
  bottom: -6, // optional, default is 0.
  right: 0 // optional, default is 0.
};

class App extends Component {
  constructor() {
    super();
    this.startApp();
  }

  startApp() {
    const navigatorButtons = {
      rightButtons: [
        {
          title: '',
          id: 'navbar.search',
          // icon: require('./assets/icons/'),
        }
      ],
      leftButtons: [
        {
          title: '',
          id: 'navbar.bookmarks',
          // icon: '',
        }
      ]
    };

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
            id: 'newsfeed.nav.search',
            icon: require('./assets/icons/Bookmark.png')
          }]
        }
      }, {
        screen: 'nuke.leadership',
        icon: require('./assets/icons/Users-deaktive.png'),
        selectedIcon: require('./assets/icons/Users-active.png'),
        title: 'Leadership',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.notready',
        icon: require('./assets/icons/toolbox-deactive.png'),
        selectedIcon: require('./assets/icons/toolbox-active.png'),
        title: 'Toolbox',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.notready',
        icon: require('./assets/icons/meetings-deactive.png'),
        selectedIcon: require('./assets/icons/meetings-active.png'),
        title: 'Quarterly Meetings',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }],
      drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'nuke.notready', // unique ID registered with Navigation.registerScreen
          passProps: {} // simple serializable object that will pass as props to all top screens (optional)
        },
        right: { // optional, define if you want a drawer from the right
          screen: 'nuke.notready', // unique ID registered with Navigation.registerScreen
          passProps: {} // simple serializable object that will pass as props to all top screens (optional)
        },
        style: {
          leftDrawerWidth: '90%',
        },
        disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
      },
      tabsStyle: {
        tabBarButtonColor: 'rgba(255,255,255,0.9)',
        tabBarSelectedButtonColor: 'none',
        tabBarBackgroundColor: colors.tabBar
      }
    });
  }
}

export default App;
