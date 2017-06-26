import React              from 'react'
import { connect }        from 'react-redux'
import { View, Text }     from 'react-native'
import R                  from 'ramda'
import { navigatorStyle } from '../../constants/styles'

const isButtonPress = R.compose(R.equals('NavBarButtonPress'), R.prop('type'))
const isClose = R.compose(R.equals('search.close'), R.prop('id'))

const PostSearchScreen = ({ navigator }) => {

  const onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'search.close') {
        navigator.dismissModal()
      }

      if (event.id === 'search.clear') {
        // clear input field
      }
    }
  }

  navigator.setOnNavigatorEvent(onNavigatorEvent)
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
