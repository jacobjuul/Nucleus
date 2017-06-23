import React, { Component } from 'react'
import R                    from 'ramda'
import { 
  ListView, 
  StyleSheet, 
  View,
  Text,
  ActivityIndicator }       from 'react-native'
import { connect }          from 'react-redux'
import { fetchUsers }       from '../../actions/userActions'
import LeaderListItem       from '../../components/LeaderListItem'

class LeadershipScreen extends Component {
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetched && nextProps.users !== this.props.users) {
      this.setDataSource(nextProps.users)
    }
  }

  setDataSource = (users) => {
    this.setState({ 
      dataSource: this.state.dataSource.cloneWithRows(R.valuesIn(users))
    })
  }

  renderRow = (row) => {
    return (
      <LeaderListItem
        id={row.id}
        name={row.name}
        title={row.title}
      />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const removeAdmins = R.pickBy(v => !v.admin)

const mapStateToProps = ({ entities, users }) => ({
  users: removeAdmins(entities.users),
  loading: users.loading,
  fetched: users.fetched
})

export default connect(mapStateToProps, { fetchUsers })(LeadershipScreen)

