import React              from 'react'
import { connect }        from 'react-redux'
import { View, Text }     from 'react-native'
import R                  from 'ramda'
import { navigatorStyle } from '../../constants/styles'

// ifButtonPress :: (a -> b) -> a -> b a
const ifButtonPress = action =>
  R.when(
    R.propEq('type', 'NavBarButtonPress'),
    action
  )

const PostSearchScreen = ({ navigator }) => {
  const navBarAction = event => {
    if (event.id === 'search.close') navigator.dismissModal()
    if (event.id === 'search.clear') console.log('clear')
  }

  const navigatorEvents = ifButtonPress(navBarAction)
  navigator.setOnNavigatorEvent(navigatorEvents)
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

PostSearchScreen.navigatorStyle = navigatorStyle
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

export default connect(mapStateToProps, {})(PostSearchScreen)
