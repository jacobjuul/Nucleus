// @flow
import { StyleSheet } from 'react-native'

export const colors = {
  primary: 'rgb(48, 70, 78)',
  secondary: '#69B8D6',
  muted: 'rgba(0,0,0,0.5)',
  tabarSelected: 'black',
  tab: 'black',
  tabBar: 'black'
}

export const effects = StyleSheet.create({
  boxShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.5,
  }
})

export const fonts = StyleSheet.create({
  primary: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    lineHeight: 28
  }
})

export const headings = StyleSheet.create({
  h1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export const defaultScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
})
