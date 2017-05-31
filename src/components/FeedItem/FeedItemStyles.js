import { StyleSheet } from 'react-native';
import { app as appStyles } from '../../constants/styles';

const FeedItemStyles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white'
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 20,
  },
  topBarLeft: {
  },
  topBarRight: {
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
  footerText: {
    fontSize: 12
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readMore: {
    paddingTop: 15,
    color: appStyles.colors.muted,
    fontSize: 12
  },
  author: {
    fontSize: 15,
    color: appStyles.colors.secondary
  },
  date: {
    color: appStyles.colors.muted,
    fontSize: 12,
  },
  summary: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    lineHeight: 28
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 10
  }
});

export default FeedItemStyles;