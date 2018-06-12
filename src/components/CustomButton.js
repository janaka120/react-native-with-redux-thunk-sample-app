import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CustomButton extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.buttonViewContainer]}>
        <TouchableOpacity
          style={[styles.button, this.props.buttonContainer]}
          onPress={this.props.onPress}
        >
          <Text style={[styles.title, this.props.titleStyle]}>
            {this.props.title.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff"
  },
  title: {
    fontWeight: "400",
    fontSize: "1.5rem",
    textAlign: "center",
    color: "#fff",
    fontFamily: "monospace, monospace"
  }
});
