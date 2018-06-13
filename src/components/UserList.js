import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import Item from "./ListItem";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.emptyContent = this.emptyContent.bind(this);
  }

  emptyContent() {
    return (
      <View>
        <Text>No users...</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={item => this.renderItems(item)}
          scrollEnabled={true}
          ListEmptyComponent={this.emptyContent}
        />
      </View>
    );
  }

  renderItems(item) {
    let user = item.item;
    let fullName = user.name.first + " " + user.name.last;
    return (
      <Item
        id={item.id}
        username={user.login.username}
        name={fullName}
        email={user.email}
        image={user.picture.medium}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
