import React from 'react'
import { View, Text, StyleSheet, VirtualizedList } from 'react-native'
import Comment from '../Comment'

const PostComments = ({ comments }) => {
  const renderItem = ({ item }) =>
    <Comment content={item.content} user={item.user} date={item.created_at} />
  const keyExtractor = ({ id }) => id

  return (
    <VirtualizedList
      style={styles.container}
      keyExtractor={keyExtractor}
      data={comments}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
})

export default PostComments
