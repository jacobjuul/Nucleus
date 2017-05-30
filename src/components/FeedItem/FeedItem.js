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
import { app as appStyles } from '../../constants/styles';
import pluralize from '../../utils/pluralize';

type PropTypes = {
  title:     string,
  author:    Object,
  summary:   string,
  comments:  number,
  bookmarks: number,
};

const FeedItem = ({ title, author, summary, comments, bookmarks }: PropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.avatar} source={require('../../assets/icons/logo.png')} />
        </View>
        <View style={styles.topBarRight}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{moment().format('d. MMMM')}</Text>
        </View>
      </View>

      <TouchableHighlight style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={styles.summary}
          >
            {summary}
          </Text>
          <TouchableHighlight>
            <Text style={styles.readMore}>Read more</Text>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>

      <View style={styles.footer}>
        <View><Text style={styles.footerText}>{comments} {pluralize('response', comments)}</Text></View>
        <View><Text style={styles.footerText}>{bookmarks} {pluralize('bookmark', bookmarks)}</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white'
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 20,
  },
  topBarLeft: {

  },
  topBarRight: {
  },
  content: {
    paddingBottom: 16
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E5E5'
  },
  footerText: {
    fontSize: 12
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readMore: {
    paddingTop: 15,
    color: appStyles.colors.muted,
    fontSize: 12
  },
  author: {
    fontSize: 15,
    color: appStyles.colors.secondary
  },
  date: {
    color: appStyles.colors.muted,
    fontSize: 12,
  },
  summary: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    lineHeight: 28
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 10
  }
});

export default FeedItem;
