import React              from 'react'
import { connect }        from 'react-redux'
import { View, Text }     from 'react-native'
import { navigatorStyle } from '../../constants/styles'

const PostSearchScreen = ({ navigator }) => {
  const onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'search.close') {
        navigator.dismissModal()
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
