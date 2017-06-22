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
import FeedItemHeader  from './FeedItemHeader'
import FeedItemExcerpt from './FeedItemExcerpt'
import FeedItemImage   from './FeedItemImage'
import FeedItemFooter  from './FeedItemFooter'

type PropTypes =
  { title:     string
  , author:    Object
  , excerpt:   string
  , comments:  number
  , bookmarks: number }

const FeedItem = ({ title, author, excerpt, comments, bookmarks, date, image }: PropTypes) => {
  const getAuthorField = R.pathOr('', R.__, author)
  const authorImage = getAuthorField(['image_url'])
  const authorName = getAuthorField(['name'])
  const defaultToZero = R.defaultTo(0)
  return (
    <View style={styles.container}>
      <FeedItemHeader image={authorImage} name={authorName} date={date} />
      <Text style={styles.title}>{title}</Text>
      {
        image
        ? <FeedItemImage source={image} />
        : <FeedItemExcerpt title={title} excerpt={excerpt} />
      }
      <TouchableHighlight>
        <Text style={styles.readMore}>Read more</Text>
      </TouchableHighlight>
      <FeedItemFooter 
        bookmarks={defaultToZero(bookmarks)} 
        comments={defaultToZero(comments)} 
      />
    </View>
  )
}

export default FeedItem
