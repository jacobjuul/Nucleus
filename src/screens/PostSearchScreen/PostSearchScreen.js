import React              from 'react'
import { connect }        from 'react-redux'
import {
  View,
  Text,
  TextInput,
  StyleSheet }            from 'react-native'
import R                  from 'ramda'
import {
  navigatorStyle,
  colors }                from '../../constants/styles'
import { searchFilter }   from '../../actions/postActions'

// ifButtonPress :: (a -> b) -> a -> b a
const ifButtonPress = action =>
  R.when(
    R.propEq('type', 'NavBarButtonPress'),
    action
  )

const PostSearchScreen = ({ navigator, searchFilter }) => {
  const closeOrClear = event => {
    if (event.id === 'search.close') navigator.dismissModal()
    if (event.id === 'search.clear') console.log('clear')
  }

  const navigatorEvents = ifButtonPress(closeOrClear)
  navigator.setOnNavigatorEvent(navigatorEvents)

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          keyboardType="web-search"
          placeholder="Search"
          onChangeText={searchFilter}
          placeholderTextColor="rgba(255,255,255,0.2)"
          clearButtonMode="always"
          autoFocus
        />
      </View>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1
  },
  searchContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.4)',
    padding: 20
  },
  search: {
    height: 40,
    color: 'white'
  }
})

PostSearchScreen.navigatorStyle = {
  ...navigatorStyle,
  drawUnderNavBar: false
}

PostSearchScreen.navigatorButtons = {
  leftButtons: [{
    title: 'X',
    id: 'search.close'
  }],
  rightButtons: [{
    title: 'Clear',
    id: 'search.clear'
  }]
}

const mapStateToProps = state => ({
  state: ''
})

export default connect(mapStateToProps, { searchFilter })(PostSearchScreen)
