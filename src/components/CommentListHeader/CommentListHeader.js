import React from 'react'
import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native'

const CommentListHeader = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.container}>
      <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1146014416/mark-zuckerberg.jpg' }} style={styles.avatar} />
      <Text>Write a response</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 40,
    width: 40,
    marginRight: 10
  },
  text: {
    fontSize: 18,
    fontWeight: '300'
  }
})

export default CommentListHeader
