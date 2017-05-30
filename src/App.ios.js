/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens/registerScreens';

import configureStore from './store/configureStore';

import * as style from './constants/styles';

const store = configureStore();

registerScreens(store, Provider);


const navigatorStyle = {
  navBarTranslucent: true,
  navBarBackgroundColor: style.app.colors.primary,
  drawUnderNavBar: false,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: false
};

const iconInsets = { // add this to change icon position (optional, iOS only).
  top: 6, // optional, default is 0.
  left: 0, // optional, default is 0.
  bottom: -6, // optional, default is 0.
  right: 0 // optional, default is 0.
};

class App extends Component {
  constructor(props) {
    super(props);
    this.startApp();
  }

  startApp() {
    const navigatorButtons = {
      rightButtons: [
        {
          title: 'Activities',
          id: 'navbar.search',
          // icon: '',
        }
      ],
      leftButtons: [
        {
          title: 'Awards',
          id: 'navbar.bookmarks',
          // icon: '',
        }
      ]
    };

    Navigation.startTabBasedApp({
      tabs: [{
        screen: 'nuke.home',
        // icon: '',
        // selectedIcon: '',
        title: 'Business updates',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.home',
        // icon: '',
        // selectedIcon: '',
        title: 'Call',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.home',
        // icon: '',
        // selectedIcon: '',
        title: 'Notes',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.home',
        // icon: '',
        // selectedIcon: '',
        title: 'Photos',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }, {
        screen: 'nuke.home',
        // icon: '',
        // selectedIcon: '',
        title: 'Mood',
        navigatorStyle,
        iconInsets,
        navigatorButtons
      }
    ],
    drawer: { // optional, add this if you want a side menu drawer in your app
      left: { // optional, define if you want a drawer from the left
        screen: 'nuke.home', // unique ID registered with Navigation.registerScreen
        passProps: {} // simple serializable object that will pass as props to all top screens (optional)
      },
      right: { // optional, define if you want a drawer from the right
        screen: 'nuke.home', // unique ID registered with Navigation.registerScreen
        passProps: {} // simple serializable object that will pass as props to all top screens (optional)
      },
      style: {
        leftDrawerWidth: '90%',
      },
      disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
    },
    tabsStyle: {
      tabBarButtonColor: style.app.colors.primary,
      tabBarSelectedButtonColor: style.app.colors.primary,
      tabBarBackgroundColor: style.app.colors.tabBar
    }
  });
}
}

export default App;
