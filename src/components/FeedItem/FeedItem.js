// @flow
import React     from 'react';
import moment    from 'moment';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import pluralize from '../../utils/pluralize';
import styles from './FeedItemStyles';
import FeedItemSummary from './FeedItemSummary';

type PropTypes =
  { title:     string
  , author:    Object
  , excerpt:   string
  , comments:  number
  , bookmarks: number };

const FeedItem = ({ title, author, excerpt, comments, bookmarks }: PropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.avatar} source={require('../../assets/icons/logo.png')} />
        </View>
        <View style={styles.topBarRight}>
          <Text style={styles.author}>{author.email}</Text>
          <Text style={styles.date}>{moment().format('d. MMMM')}</Text>
        </View>
      </View>

      <FeedItemSummary title={title} summary={excerpt} />

      <View style={styles.footer}>
        <View><Text style={styles.footerText}>{comments} {pluralize('response', comments)}</Text></View>
        <View><Text style={styles.footerText}>{bookmarks} {pluralize('bookmark', bookmarks)}</Text></View>
      </View>
    </View>
  );
};

export default FeedItem;
