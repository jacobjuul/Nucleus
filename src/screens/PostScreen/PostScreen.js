import React, { Component } from 'react'
import R                    from 'ramda'
import { connect }          from 'react-redux'
import {
  View,
  ScrollView,
  ActivityIndicator }       from 'react-native'
import { defaultScreen }    from '../../constants/styles'

import Post                 from '../../components/Post'
import PostComments         from '../../components/PostComments'
import PostSnackbar         from '../../components/PostSnackbar'

const pathOrList = R.pathOr([])
const numberOfbookmarks = R.memoize(R.compose(R.length, pathOrList(['post', 'bookmark_users'])))
const numberOfcomments = R.memoize(R.compose(R.length, pathOrList(['post', 'comments'])))

class PostScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
    navBarLeftButtonFontWeight: '100',
  }

  render() {
    if (!this.props.post) {
      return <ActivityIndicator />
    }
    return (
      <View style={defaultScreen.container}>
        <ScrollView>
          <Post post={this.props.post} />
          <PostComments comments={comments(this.props)} />
        </ScrollView>
        <PostSnackbar
          bookmarks={numberOfbookmarks(this.props)}
          comments={numberOfcomments(this.props)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.postId]
})

export default connect(mapStateToProps, null)(PostScreen)
