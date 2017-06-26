import React              from 'react'
import { connect }        from 'react-redux'
import { View, Text }     from 'react-native'
import R                  from 'ramda'
import { navigatorStyle } from '../../constants/styles'

const ifButtonPress = action =>
  R.when(
    R.propEq('type', 'NavBarButtonPress'),
    action
  )

const PostSearchScreen = ({ navigator }) => {
  const onNavigatorEvent = event => {
    if (event.id === 'search.close') navigator.dismissModal()
    if (event.id === 'search.clear') console.log('clear')
  }

  navigator.setOnNavigatorEvent(ifButtonPress(onNavigatorEvent))
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
