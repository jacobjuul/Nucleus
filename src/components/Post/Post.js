import React          from 'react'
import { 
  View, 
  Text, 
  ActivityIndicator } from 'react-native'
import styles         from './PostStyle'
import * as appStyles from '../../constants/styles'
import PostHeader     from '../PostHeader'
import PostImage      from '../PostImage'
import PostTitle      from './PostTitle'
import PostContent    from './PostContent'

const Post = ({ post }) => {
  return (
    <View style={[styles.container, appStyles.effects.boxShadow]}>
      <PostHeader name={post.author.name} image={post.author.image_url} />
      <PostTitle title={post.title} />
      {post.image_url && <PostImage source={post.image_url} />}
      <PostContent content={post.content} />
    </View>
  )
}

export default Post
