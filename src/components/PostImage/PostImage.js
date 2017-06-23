import React     from 'react'
import { Image } from 'react-native'

const PostImage = ({ source }) =>
  <Image source={{ uri: source }} style={{ height: 200 }} resizeMode="contain" />

export default PostImage