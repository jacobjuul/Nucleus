/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import FeedScreen     from './FeedScreen';
import NotReady     from './NotReady';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('nuke.feed', () => FeedScreen, store, Provider);
  Navigation.registerComponent('nuke.notready', () => NotReady, store, Provider);
}
