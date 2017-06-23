/* @flow */
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import R_valuesIn           from 'ramda/src/valuesIn'
import { 
  VirtualizedList,
  StyleSheet,
  View,
  ActivityIndicator }       from 'react-native'
import { colors }           from '../../constants/styles'
import { fetchPosts }       from '../../actions/postActions'
import FeedItem             from '../../components/FeedItem'

class FeedScreen extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  handlePress = (postId) => {
    this.props.navigator.push({
      screen: 'nuke.postscreen',
      passProps: { postId },
      backButtonTitle: ''
    })
  }

  renderItem = ({ item }) => {
    return (
      <FeedItem
        key={item.id}
        id={item.id}
        title={item.title}
        author={item.author}
        excerpt={item.excerpt}
        content={item.content}
        bookmarks={item.bookmark_users}
        comments={item.comments}
        date={item.publish_at}
        image={item.image_url}
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
        <VirtualizedList
          style={styles.container}
          data={R_valuesIn(this.props.posts)}
          renderItem={this.renderItem}
        />
      )
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
