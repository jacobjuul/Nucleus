/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import FeedScreen     from './FeedScreen';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('nuke.feed', () => FeedScreen, store, Provider);
}
