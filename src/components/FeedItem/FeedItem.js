// @flow
import React     from 'react';
import PropTypes from 'prop-types';
import moment    from 'moment';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import { app as appStyles } from '../../constants/styles';

type Props = {
  title: string,
  author: Object,
  summary: string,
  responses: number,
  bookmarks: number,
};

const FeedItem = ({ title, author, summary, responses, bookmarks }: Props) => {
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
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.summary}
          >
            {summary}
          </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.footer}>
        <Text>footer</Text>
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

  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    height: 50
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
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
    fontFamily: 'Helvetica Neue'
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 10
  }
});

FeedItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
}

export default FeedItem;