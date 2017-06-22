import React          from 'react'
import { View, Text } from 'react-native'
import styles         from './FeedItemStyles'
import pluralize      from '../../utils/pluralize'

const FeedItemFooter = ({ comments, bookmarks }) => {
  console.log(comments, bookmarks)
  return (
    <View style={styles.footer}>
      <View><Text style={styles.footerText}>{comments.length} {pluralize('response', comments)}</Text></View>
      <View><Text style={styles.footerText}>{bookmarks.length} {pluralize('bookmark', bookmarks)}</Text></View>
    </View>
  )
}

export default FeedItemFooter
