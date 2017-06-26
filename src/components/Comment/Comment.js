import React       from 'react'
import {
  View,
  Text,
  StyleSheet }     from 'react-native'
import AuthorBar   from '../AuthorBar'
import { effects } from '../../constants/styles'

const Comment = ({ content, user, date }) => {
  return (
    <View style={[styles.container, effects.boxShadow]}>
      <AuthorBar name={user.name} image={user.image_url} date={date} />
      <Text>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    paddingTop: 22,
    paddingBottom: 30,
    paddingLeft: 18,
    paddingRight: 18
  }
})

export default Comment
