import React, { Component }        from 'react'
import { connect }                 from 'react-redux'
import { View, Text }              from 'react-native'
import { getUserFromAsyncStorage } from '../../actions/sessionActions'

const AuthHoc = (WrappedComponent) => {
  class _AuthHOC extends Component {
    componentWillMount() {
      if (!this.props.currentUser) {
        this.props.getUserFromAsyncStorage()
      }
    }

    renderLogin = () => {
      return <View><Text>LOOOOGIN!!!</Text></View>
    }

    render() {
      if (!this.props.currentUser) {
        return this.renderLogin()
      }
      return <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
  })

  return connect(mapStateToProps, { getUserFromAsyncStorage })(_AuthHOC)
}

export default AuthHoc
