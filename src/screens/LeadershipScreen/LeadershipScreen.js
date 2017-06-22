import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { connect }          from 'react-redux';
import { fetchUsers }       from '../../actions/userActions';

class LeadershipScreen extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <View />;
  }
}

const mapStateToProps = ({ entities }) => ({
  users: entities.users
});

export default connect(mapStateToProps, { fetchUsers })(LeadershipScreen);
