/* @flow */
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import R_valuesIn           from 'ramda/src/valuesIn';
import { 
  ListView, 
  StyleSheet, 
  View, 
  ActivityIndicator }       from 'react-native';
import { colors, fonts }    from '../../constants/styles';
import { fetchPosts }       from '../../actions/postActions';
import FeedItem             from '../../components/FeedItem';

type StateType = {
  dataSource: Object[]
};

class FeedScreen extends Component {
  state: StateType
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetched && nextProps.posts !== this.props.posts) {
      this.setDataSource(nextProps.posts)
    }
  }

  setDataSource = (posts) => {
    this.setState({ 
      dataSource: this.state.dataSource.cloneWithRows(R_valuesIn(posts))
    })
  }

  handlePress = (postId) => {
    this.props.navigator.push({
      screen: 'nuke.postscreen',
      passProps: { postId },
      backButtonTitle: ''
    })
  }

  renderRow = (row) => {
    return (
      <FeedItem
        id={row.id}
        title={row.title}
        author={row.author}
        excerpt={row.excerpt}
        content={row.content}
        bookmarks={row.bookmark_users}
        comments={row.comments}
        date={row.publish_at}
        image={row.image_url}
        onPress={this.handlePress}
      />
    )
  }

  render() {
    if (this.props.loading) {
      return <ActivityIndicator style={styles.container} color="white" />
    }

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
})

const mapStateToProps = ({ entities, posts }) => ({
  posts: entities.posts,
  loading: posts.loading,
  fetched: posts.fetched
})

export default connect(mapStateToProps, { fetchPosts })(FeedScreen)
