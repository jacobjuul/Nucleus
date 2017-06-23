import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors } from '../../constants/styles'

const PostSnackbar = ({ comments, bookmarks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Image source={require('../../assets/icons/Reply.png')} />
        <Image source={require('../../assets/icons/bookmark-blue.png')} />
        <Image source={require('../../assets/icons/Share.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
           {comments} Responses
        </Text>
        <Text style={styles.text}>
           {bookmarks} Bookmarks
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E5E5',
    padding: 10,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text: {
    color: colors.muted,
    fontSize: 12,
    marginRight: 5,
  }
})

export default PostSnackbar
