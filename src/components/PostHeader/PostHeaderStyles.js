import { StyleSheet } from 'react-native'
import { colors }     from '../../constants/styles'

const PostHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 20,
  },
  author: {
    fontSize: 15,
    color: colors.secondary
  },
  date: {
    color: colors.muted,
    fontSize: 12,
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 10
  }
})

export default PostHeaderStyles
