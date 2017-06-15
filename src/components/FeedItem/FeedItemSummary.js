// @flow
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './FeedItemStyles';

const FeedItemSummary = ({ summary, title }) => {
  return (
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
  );
};

export default FeedItemSummary;