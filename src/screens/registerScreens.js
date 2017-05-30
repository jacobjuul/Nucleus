/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
// import { withDrawer } from '../utils/drawerHelper';
import HomeScreen     from './HomeScreen';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('nuke.home', () => HomeScreen, store, Provider);
}
