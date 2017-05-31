/* @flow */
import React, { Component }           from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { connect }                    from 'react-redux';
import R                              from 'ramda';

import { app as appStyles } from '../../constants/styles';
import { fetchPosts }       from '../../actions/postActions';
import FeedItem             from '../../components/FeedItem';

type StateType = {
  dataSource: Object[]
};

class FeedScreen extends Component {
  state: StateType;

  constructor() {
    super();
    this.state = { dataSource: [] };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetched && nextProps.posts !== this.props.posts) {
      this.setDataSource();
    }
  }

  renderRow = (row) => {
    return (
      <FeedItem
        title={row.title}
        author={row.author}
        summary={row.post}
        bookmarks={row.bookmarks}
        comments={row.comments}
      />
    );
  }

  setDataSource = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const posts = R.valuesIn(this.props.posts);
    this.setState({
      dataSource: ds.cloneWithRows(posts),
    });
  }

  render() {
    if (this.props.fetched) {
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      );
    }

    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.colors.primary,
  },
});

const mapStateToProps = ({ posts }) => ({
  posts: posts.entities.posts,
  loading: posts.loading,
  fetched: posts.fetched
});

export default connect(mapStateToProps, { fetchPosts })(FeedScreen);
