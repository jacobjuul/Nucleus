/* eslint-disable import/prefer-default-export */
import { Navigation }     from 'react-native-navigation'
import LeadershipScreen   from './LeadershipScreen'
import FeedScreen         from './FeedScreen'
import PostScreen         from './PostScreen'
import WriteCommentScreen from './WriteCommentScreen'
import PostSearchScreen   from './PostSearchScreen'
import LoginScreen        from './LoginScreen'
import NotReady           from './NotReady'
import AuthHoc            from '../HOC/AuthHoc'


export function registerScreens(store, Provider) {
  Navigation.registerComponent('nuke.login', () => LoginScreen, store, Provider)
  Navigation.registerComponent('nuke.feed', () => FeedScreen, store, Provider)
  Navigation.registerComponent('nuke.postscreen', () => PostScreen, store, Provider)
  Navigation.registerComponent('nuke.leadership', () => LeadershipScreen, store, Provider)
  Navigation.registerComponent('nuke.writecomment', () => WriteCommentScreen, store, Provider)
  Navigation.registerComponent('nuke.posts.searchscreen', () => PostSearchScreen, store, Provider)
  Navigation.registerComponent('nuke.notready', () => NotReady, store, Provider)
}
