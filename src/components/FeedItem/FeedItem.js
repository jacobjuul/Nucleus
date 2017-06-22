// @flow
import React  from 'react';
import moment from 'moment';
import R      from 'ramda';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import pluralize       from '../../utils/pluralize';
import styles          from './FeedItemStyles';
import FeedItemExcerpt from './FeedItemExcerpt';
import FeedItemImage   from './FeedItemImage';

type PropTypes =
  { title:     string
  , author:    Object
  , excerpt:   string
  , comments:  number
  , bookmarks: number };

const FeedItem = ({ title, author, excerpt, comments, bookmarks, date, image }: PropTypes) => {
  const emptyAuthorField = R.pathOr('', R.__, author);
  const authorImage = emptyAuthorField(['image_url']);
  const authorName = emptyAuthorField(['name']);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.avatar} source={{ uri: authorImage }} />
        </View>
        <View style={styles.topBarRight}>
          <Text style={styles.author}>{authorName}</Text>
          <Text style={styles.date}>{moment(date).format('d. MMMM')}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      {
        image
        ? <FeedItemImage source={image} />
        : <FeedItemExcerpt title={title} excerpt={excerpt} />
      }
      <TouchableHighlight>
        <Text style={styles.readMore}>Read more</Text>
      </TouchableHighlight>
      <View style={styles.footer}>
        <View><Text style={styles.footerText}>{comments} {pluralize('response', comments)}</Text></View>
        <View><Text style={styles.footerText}>{bookmarks} {pluralize('bookmark', bookmarks)}</Text></View>
      </View>
    </View>
  );
};

export default FeedItem;
