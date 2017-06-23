// @flow
import React                 from 'react'
import moment                from 'moment'
import { View, Image, Text } from 'react-native'
import styles                from './PostHeaderStyles'

type PropTypes =
  { name: string
  , image: string
  , date: Date
  , dateFormat?: string }

const PostHeader = ({ name, image, date, dateFormat }: PropTypes) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.avatar} source={{ uri: image }} />
      </View>
      <View>
        <Text style={styles.author}>{name}</Text>
        <Text style={styles.date}>{moment(date).format(dateFormat)}</Text>
      </View>
    </View>
  )
}

PostHeader.defaultProps = {
  dateFormat: 'd. MMMM',
  name: '',
  image: '',
  date: new Date()
}

export default PostHeader