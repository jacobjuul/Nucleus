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
import PostHeader      from '../PostHeader'
import FeedItemExcerpt from './FeedItemExcerpt'
import PostImage       from '../PostImage'
import FeedItemFooter  from './FeedItemFooter'

type PropTypes =
  { title:     string
  , author:    Object
  , excerpt:   string
  , comments:  number
  , bookmarks: number }

const FeedItem = ({ id, title, author, excerpt, comments, bookmarks, date, image, onPress }: PropTypes) => {
  const getAuthorField = R.pathOr('', R.__, author)
  const authorImage = getAuthorField(['image_url'])
  const authorName = getAuthorField(['name'])
  const defaultToList = R.defaultTo([])

  const handlePress = () => onPress(id)

  return (
    <View style={[styles.container, appStyles.effects.boxShadow]}>
      <PostHeader image={authorImage} name={authorName} date={date} />
      <Text style={appStyles.headings.h1}>{title}</Text>
      {
        image
        ? <PostImage source={image} />
        : <FeedItemExcerpt title={title} excerpt={excerpt} />
      }
      <TouchableHighlight onPress={handlePress}>
        <Text style={styles.readMore}>Read more</Text>
      </TouchableHighlight>
      <FeedItemFooter 
        bookmarks={defaultToList(bookmarks)} 
        comments={defaultToList(comments)} 
      />
    </View>
  )
}

export default FeedItem
