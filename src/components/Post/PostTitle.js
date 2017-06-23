import React from 'react'
import { View, Text } from 'react-native'
import  * as styles from '../../constants/styles'

const PostTitle = ({ title }) => (
  <View>
    <Text style={styles.headings.h1}>
      {title}
    </Text>
  </View>
)

export default PostTitle
