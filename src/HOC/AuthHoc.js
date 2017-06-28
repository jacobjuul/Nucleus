import React, { Component }        from 'react'
import { connect }                 from 'react-redux'
import { View, Text }              from 'react-native'
import LoginScreen                 from '../screens/LoginScreen'
import { getUserFromAsyncStorage } from '../actions/sessionActions'

const AuthHoc = (WrappedComponent) => {
  class _AuthHOC extends Component {
    componentWillMount() {
      if (!this.props.currentUser) {
        this.props.getUserFromAsyncStorage()
      }
    }

    toggleNavAndTabs = (to) => {
      this.props.navigator.toggleTabs({ to, animated: false })
      this.props.navigator.toggleNavBar({ to, animated: false })
    }

    renderLogin = () => {
      this.toggleNavAndTabs('hidden')
      return <LoginScreen key="Login" {...this.props} />
    }

    renderWrapped = () => {
      this.toggleNavAndTabs('shown')
      return <WrappedComponent {...this.props} />
    }

    render() {
      if (this.props.currentUser) {
        return this.renderLogin()
      }
      return this.renderWrapped()
    }
  }

  const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser,
    loggingIn: session.loggingIn
  })

  return connect(mapStateToProps, { getUserFromAsyncStorage })(_AuthHOC)
}

export default AuthHoc
