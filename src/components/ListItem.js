import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: this.props.image }} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Username: </Text>
            <Text style={styles.text}>{this.props.username}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>FullName: </Text>
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Email: </Text>
            <Text style={styles.text}>{this.props.email}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row"
  },
  contentContainer: {
    flex: 8,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  rowContainer: {
    marginLeft: 15,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 2,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: 45,
    width: 70,
    height: 70,
    backgroundColor: "#d6d6c2"
  },
  title: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    textAlign: "center",
    color: "#000"
  },
  text: {
    fontWeight: "400",
    fontSize: "0.8rem",
    textAlign: "center",
    color: "#000"
  }
});
