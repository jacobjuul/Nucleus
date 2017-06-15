/* @flow */
import React, { Component }           from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { connect }                    from 'react-redux';
import R_valuesIn                     from 'ramda/src/valuesIn';

import { colors, fonts }    from '../../constants/styles';
import { fetchPosts }       from '../../actions/postActions';
import FeedItem             from '../../components/FeedItem';

type StateType = {
  dataSource: Object[]
};

class FeedScreen extends Component {
  state: StateType;

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }; 
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetched && nextProps.posts !== this.props.posts) {
      this.setDataSource(nextProps.posts);
    }
  }

  setDataSource = (posts) => {
    this.setState({ 
      dataSource: this.state.dataSource.cloneWithRows(R_valuesIn(posts))
    });
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
    backgroundColor: colors.primary,
  },
});

const mapStateToProps = ({ posts }) => ({
  posts: posts.entities.posts,
  loading: posts.loading,
  fetched: posts.fetched
});

export default connect(mapStateToProps, { fetchPosts })(FeedScreen);
