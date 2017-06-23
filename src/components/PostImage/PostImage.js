import React            from 'react'
import {
   Image,
   TouchableHighlight } from 'react-native'

const PostImage = ({ source, onPress }) =>
  <TouchableHighlight onPress={onPress}>
    <Image source={{ uri: source }} style={{ height: 200 }} resizeMode="contain" />
  </TouchableHighlight>

export default PostImage
