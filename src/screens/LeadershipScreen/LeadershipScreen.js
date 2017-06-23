import React, { Component } from 'react'
import R                    from 'ramda'
import {
  VirtualizedList,
  View,
  StyleSheet }              from 'react-native'
import { connect }          from 'react-redux'
import { fetchUsers }       from '../../actions/userActions'
import LeaderListItem       from '../../components/LeaderListItem'
import { colors }           from '../../constants/styles'

class LeadershipScreen extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderItem = ({ item }) => {
    return (
      <LeaderListItem
        id={item.id}
        name={item.name}
        title={item.title}
        image={item.image_url}
        country={item.country}
      />
    )
  }

  keyExtractor = ({ id }) => id
  renderSeparator = () => <View style={styles.separator} />

  render() {
    return (
      <VirtualizedList
        style={styles.container}
        data={R.valuesIn(this.props.users)}
        renderItem={this.renderItem}
        refreshing={this.props.loading}
        onRefresh={this.props.fetchUsers}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E5E5',
  }
})

const removeAdmins = R.pickBy(v => !v.admin)

const mapStateToProps = ({ entities, users }) => ({
  users: removeAdmins(entities.users),
  // users: entities.users,
  loading: users.loading,
  fetched: users.fetched
})

export default connect(mapStateToProps, { fetchUsers })(LeadershipScreen)

