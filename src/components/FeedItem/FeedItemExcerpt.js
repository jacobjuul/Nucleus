// @flow
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './FeedItemStyles';

const FeedItemExcerpt = ({ excerpt, title }) => {
  return (
    <TouchableHighlight style={styles.content}>
      <View>
        <Text
          numberOfLines={4}
          ellipsizeMode="tail"
          style={styles.summary}
        >
          {excerpt}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default FeedItemExcerpt;
