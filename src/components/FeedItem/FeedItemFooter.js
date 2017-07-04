import React                 from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles                from './FeedItemStyles'
import pluralize             from '../../utils/pluralize'

const FeedItemFooter = ({ comments, bookmarks, onToggleBookmark, id, bookmarked }) => {
  const onBookmarkPress = () => onToggleBookmark(id, !bookmarked)
  return (
    <View style={styles.footer}>
      <View style={styles.footerSection}>
        <Image source={require('../../assets/icons/Responses.png')} />
        <Text style={[styles.footerText, styles.footerPaddingLeft]}>
          {comments.length} {pluralize('response', comments)}
        </Text>
      </View>
      <TouchableHighlight onPress={onBookmarkPress}>
        <View style={styles.footerSection}>
          <Text style={[styles.footerText, styles.footerPaddingRight]}>
            {bookmarks.length} {pluralize('bookmark', bookmarks)}
          </Text>
          {bookmarked
            ? <Image source={require('../../assets/icons/Bookmark-filled.png')} />
            : <Image source={require('../../assets/icons/bookmark-blue.png')} /> }

        </View>
      </TouchableHighlight>
    </View>
  )
}

export default FeedItemFooter
