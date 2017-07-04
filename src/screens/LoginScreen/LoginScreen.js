import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Image, Keyboard, ActivityIndicator } from 'react-native'
import { colors } from '../../constants/styles'
import { login } from '../../actions/appActions'


class LoginScreen extends Component {
  changeEmail = text => this.email = text
  changePassword = text => this.password = text
  focusPassword = () => this.passwordRef.focus()
  attemptLogin = () => {
    this.props.login({ email: this.email, password: this.password })
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NUCLEUS</Text>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>EMAIL</Text>
            <TextInput
              clearButtonMode="while-editing"
              onChangeText={this.changeEmail}
              style={styles.textInput}
              keyboardType="email-address"
              onSubmitEditing={this.focusPassword}
              placeholder="Enter email"
              returnKeyType="next"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>PASSWORD</Text>
            <TextInput
              ref={(c) => this.passwordRef = c}
              clearButtonMode="while-editing"
              secureTextEntry style={styles.textInput}
              placeholder="Enter password"
              returnKeyType="go"
              onSubmitEditing={this.attemptLogin}
              onChangeText={this.changePassword}
            />
          </View>
          {this.props.loggingIn && <ActivityIndicator style={styles.loader} size="large" />}
        </View>
        <Image
          style={styles.footerLogo}
          source={require('../../assets/icons/logo-long.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: '200',
    marginBottom: 80,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  formContainer: {
    display: 'flex',
    height: 190,
    width: 290,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingLeft: 18,
    paddingRight: 18,
    marginRight: 43,
    marginLeft: 43,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 28
  },
  textInputLabel: {
    fontSize: 12,
    color: colors.muted,
    paddingBottom: 10
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E5E5',
    marginTop: 14,
    marginBottom: 20
  },
  footerLogo: {
    marginTop: 90,
  }
})

const mapStateToProps = ({ session }) => ({
  loggingIn: session.loggingIn
})
export default connect(mapStateToProps, { login })(LoginScreen)
