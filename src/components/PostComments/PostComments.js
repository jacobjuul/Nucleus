import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList }      from 'react-native'
import Comment           from '../Comment'
import CommentListHeader from '../CommentListHeader'

const PostComments = ({ comments, onHeaderTouch }) => {
  const renderItem = ({ item }) =>
    <Comment content={item.content} user={item.user} date={item.created_at} />

  const keyExtractor = ({ id }) => id

  return (
    <VirtualizedList
      style={styles.container}
      keyExtractor={keyExtractor}
      data={comments}
      renderItem={renderItem}
      ListHeaderComponent={() => <CommentListHeader onPress={onHeaderTouch} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
})

export default PostComments
