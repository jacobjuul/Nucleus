/* @flow */
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import R_valuesIn           from 'ramda/src/valuesIn'
import {
  VirtualizedList,
  StyleSheet }              from 'react-native'
import { colors }           from '../../constants/styles'
import { fetchPosts }       from '../../actions/postActions'
import FeedItem             from '../../components/FeedItem'

class FeedScreen extends Component {
  constructor(props) {
    super(props)
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'newsfeed.nav.search') {
        this.props.navigator.showModal({
          screen: 'nuke.posts.searchscreen'
        })
      }
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  handlePress = postId =>
    this.props.navigator.push({
      screen: 'nuke.postscreen',
      passProps: { postId },
      backButtonTitle: ''
    })

  keyExtractor = ({ id }) => id
  renderItem = ({ item }) => (
    <FeedItem
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

  render() {
    return (
      <VirtualizedList
        style={styles.container}
        data={R_valuesIn(this.props.posts)}
        renderItem={this.renderItem}
        refreshing={this.props.loading}
        onRefresh={this.props.fetchPosts}
        keyExtractor={this.keyExtractor}
      />
    )
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
