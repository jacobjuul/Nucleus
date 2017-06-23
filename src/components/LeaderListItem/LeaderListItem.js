import React   from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet } from 'react-native'
import { colors } from '../../constants/styles'


const LeaderListemItem = ({ name, title, image, country }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: image }} resizeMode="contain" />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{`${title} • ${country}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 17
  },
  title: {
    color: colors.muted,
    fontSize: 14,
  }
})
export default LeaderListemItem
