import React from 'react';
import { Image } from 'react-native';

const FeedItemImage = ({ source }) =>
  <Image source={{ uri: source }} style={{ height: 200 }} resizeMode="contain" />

export default FeedItemImage;