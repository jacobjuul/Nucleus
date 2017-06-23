import React                 from 'react'
import { View, Text, Image } from 'react-native'
import styles                from './FeedItemStyles'
import pluralize             from '../../utils/pluralize'

const FeedItemFooter = ({ comments, bookmarks }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerSection}>
        <Image source={require('../../assets/icons/Responses.png')} />
        <Text style={[styles.footerText, styles.footerPaddingLeft]}>
          {comments.length} {pluralize('response', comments)}
        </Text>
      </View>
      <View style={styles.footerSection}>
        <Text style={[styles.footerText, styles.footerPaddingRight]}>
          {bookmarks.length} {pluralize('bookmark', bookmarks)}
        </Text>
        <Image source={require('../../assets/icons/bookmark-blue.png')} />
      </View>
    </View>
  )
}

export default FeedItemFooter
