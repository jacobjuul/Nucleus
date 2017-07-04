import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { getPostBookmarksForUser } from '../reducers/rootReducer'


class BookmarksScreen extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  bookmarks: getPostBookmarksForUser(state, state.session.currentUser.id)
})

export default connect(mapStateToProps, {})(BookmarksScreen)
