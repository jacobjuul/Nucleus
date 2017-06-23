import React                      from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as appStyle              from '../../constants/styles'

const PostContent = ({ content }) => (
  <View>
    <Text style={appStyle.fonts.primary}>
      {content}
    </Text>
  </View>
)

export default PostContent
