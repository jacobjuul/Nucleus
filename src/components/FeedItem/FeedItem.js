// @flow
import React  from 'react'
import R      from 'ramda'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'

import styles          from './FeedItemStyles'
import * as appStyles  from '../../constants/styles'
import AuthorBar      from '../AuthorBar'
import FeedItemExcerpt from './FeedItemExcerpt'
import PostImage       from '../PostImage'
import FeedItemFooter  from './FeedItemFooter'

type PropTypes =
  { title:     string
  , author:    Object
  , excerpt:   string
  , comments:  number
  , bookmarks: number }

const FeedItem = ({ id, title, author, excerpt, comments, bookmarks, date, image, onPress, onToggleBookmark, bookmarked }: PropTypes) => {
  const getAuthorField = R.pathOr('', R.__, author)
  const authorImage = getAuthorField(['image_url'])
  const authorName = getAuthorField(['name'])
  const defaultToList = R.defaultTo([])
  const handlePress = () => onPress(id)

  return (
    <View style={[styles.container, appStyles.effects.boxShadow]}>
      <AuthorBar image={authorImage} name={authorName} date={date} />
      <TouchableHighlight onPress={handlePress}>
        <Text style={appStyles.headings.h1}>{title}</Text>
      </TouchableHighlight>
      {
        image
        ? <PostImage source={image} onPress={handlePress} />
        : <FeedItemExcerpt title={title} excerpt={excerpt} />
      }
      <TouchableHighlight onPress={handlePress} style={styles.readMoreContainer}>
        <Text style={styles.readMore}>Read more</Text>
      </TouchableHighlight>
      <FeedItemFooter
        id={id}
        bookmarks={defaultToList(bookmarks)}
        bookmarked={bookmarked}
        comments={defaultToList(comments)}
        onToggleBookmark={onToggleBookmark}
      />
    </View>
  )
}

export default FeedItem
