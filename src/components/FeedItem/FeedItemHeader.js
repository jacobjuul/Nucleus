// @flow
import React                 from 'react'
import moment                from 'moment'
import { View, Image, Text } from 'react-native'
import styles                from './FeedItemStyles'

type PropTypes =
  { name: string
  , image: string
  , date: Date }

const FeedItemHeader = ({ name, image, date }: PropTypes) => {
  return (
    <View style={styles.topBar}>
      <View style={styles.topBarLeft}>
        <Image style={styles.avatar} source={{ uri: image }} />
      </View>
      <View style={styles.topBarRight}>
        <Text style={styles.author}>{name}</Text>
        <Text style={styles.date}>{moment(date).format('d. MMMM')}</Text>
      </View>
    </View>
  )
}

export default FeedItemHeader