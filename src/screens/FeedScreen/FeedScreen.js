/* @flow */
import React, { Component }     from 'react';
import { ListView, StyleSheet } from 'react-native';

import { app as appStyles } from '../../constants/styles';
import FeedItem             from '../../components/FeedItem';

type StateType = {
  dataSource: Object[]
};

export default class FeedScreen extends Component {
  state: StateType;

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  renderRow = (r) => {
    return (
      <FeedItem
        title={r.title}
        author={r.author}
        summary={r.summary}
        bookmarks={r.bookmarks}
        comments={r.comments}
      />
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.colors.primary,
  },
});
