import { StyleSheet } from 'react-native'
import { colors }     from '../../constants/styles'

const FeedItemStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white'
  },
  content: {
    paddingBottom: 16
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E5E5'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 12,
  },
  footerPaddingLeft: { paddingLeft: 10 },
  footerPaddingRight: { paddingRight: 10 },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readMore: {
    paddingTop: 15,
    paddingBottom: 15,
    color: colors.muted,
    fontSize: 12
  },
  summary: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    lineHeight: 28
  }
})

export default FeedItemStyles