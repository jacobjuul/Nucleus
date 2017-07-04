import React, { Component }        from 'react'
import { connect }                 from 'react-redux'
import {
  VirtualizedList,
  StyleSheet }                     from 'react-native'
import R                           from 'ramda'
import { colors }                  from '../../constants/styles'
import { getPostBookmarksForUser } from '../../reducers/rootReducer'
import FeedItem                    from '../../components/FeedItem'

const bookmarked = R.memoize(userId => R.any(R.propEq('id', userId)))

class BookmarksScreen extends Component {
  componentWillMount() {
    this.props.navigator.setTitle({
      title: `Your bookmarks (${this.props.bookmarks.length})`
    })
  }
  keyExtractor = ({ id }) => id

  renderItem = ({ item }) => (
    <FeedItem
      id={item.id}
      title={item.title}
      author={item.author}
      excerpt={item.excerpt}
      content={item.content}
      bookmarks={item.bookmark_users}
      bookmarked={bookmarked(this.props.currentUser.id)(item.bookmark_users)}
      comments={item.comments}
      date={item.publish_at}
      image={item.image_url}
      onPress={this.handlePress}
      onToggleBookmark={this.handleBookmarkPost}
    />
  )

  render() {
    console.log(this.props.bookmarks)
    return (
      <VirtualizedList
        style={styles.container}
        data={R.valuesIn(this.props.bookmarks)}
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

const mapStateToProps = state => ({
  bookmarks: getPostBookmarksForUser(state, state.session.currentUser.id),
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps, {})(BookmarksScreen)
