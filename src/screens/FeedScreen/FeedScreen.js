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
      dataSource: ds.cloneWithRows([{
        title: 'Maersk gaar konkurs',
        author: 'Maersk',
        summary: 'Every year, Maersk Line reviews and rates our used containers. The condition of the containers is used to rate them in three different categories: Reuse, Repurpose and Recycle. The containers are then retired from active service in our fleet and put up for sale.',
        comments: 2,
        bookmarks: 1
      }, {
        title: 'Maersk har mirakel vaekst',
        author: 'Maersk Line',
        summary: 'The containers are then added to the webshop and can be found based on various criterias. You can search by class, type, size, location, etc.',
        comments: 8,
        bookmarks: 0
      }]),
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
