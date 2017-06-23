import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PostComments = ({ comments }) => {
  return (
    <View style={styles.container}>
      <Text>Some comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white'
  }
})

export default PostComments