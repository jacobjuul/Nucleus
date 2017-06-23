import React                      from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Markdown                   from 'react-native-simple-markdown'

const PostContent = ({ content }) => (
  <Markdown styles={markdownStyles}>
    {content}
  </Markdown>
)
const markdownStyles = {
  view: {
    marginTop: 18
  },
  text: {
    fontSize: 18,
    lineHeight: 28
  },
  blockQuote: {
    marginTop: 35,
    marginBottom: 35,
    paddingRight: 18,
  },
  blockQuoteText: {
    fontSize: 18,
    color: '#004E6B',
    fontWeight: 'normal',
    lineHeight: 28
  },
  blockQuoteBar: {
    backgroundColor: '#69B8D6',
    width: 3,
    marginRight: 20
  }
}
export default PostContent
