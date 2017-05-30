/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import { drawerListener } from '../utils/drawerHelper';

export default class HomeScreen extends Component {
  // componentDidMount() {
  //   drawerListener(this.props.navigator)
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>SO GOOD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
