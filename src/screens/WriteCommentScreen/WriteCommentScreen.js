import React       from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet }     from 'react-native'
import { colors }  from '../../constants/styles'

const closeModal = navigator => navigator.dismissModal()

const WriteCommentScreen = ({ postId, post, navigator }) => {
  const navigatorEvents = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'post.cancelComment') {
        closeModal(navigator)
      }
      if (event.id === 'post.addComment') {
        console.log(event)
      }
    }
  }

  navigator.setOnNavigatorEvent(navigatorEvents)
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxHead}>New comment to:</Text>
        <Text style={styles.infoBoxTitle}>
          {post.title}
        </Text>
      </View>
    </View>
  )
}

WriteCommentScreen.navigatorButtons = {
  rightButtons: [{ title: 'Post comment', id: 'post.addComment' }],
  leftButtons: [{ title: 'Cancel', id: 'post.cancelComment' }],
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 18,
    marginLeft: 18,
  },
  infoBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 12,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: '#E0E5E5'
  },
  infoBoxHead: {
    fontSize: 12,
    color: colors.muted
  },
  infoBoxTitle: {
    fontSize: 15
  }
})

const mapStateToProps = ({ entities }, { postId }) => ({
  post: entities.posts[postId]
})

export default connect(mapStateToProps, {})(WriteCommentScreen)
