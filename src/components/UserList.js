import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import Item from "./ListItem";

export default class UserList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={item => this.renderItems(item)}
          scrollEnabled={true}
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
