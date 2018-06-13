import React, { Component } from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      users: [],
      isFetching: true,
      errorMessage: null
    };
  }

  async fetchRandomPeopleAPI() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      console.log(json);
      this.setState({ users: json.results, isFetching: false });
    } catch (error) {
      this.setState({ errorMessage: error, isFetching: false });
    }
  }

  componentDidMount() {
    this.fetchRandomPeopleAPI();
  }

  render() {
    let content = this.state.isFetching ? (
      <ActivityIndicator size="large" />
    ) : (
        <UserList users={this.state.users} />
      );

    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>React-Native Redux Thunk Sample App</Text>
        </View>
        <View style={styles.contentContainer}>{content}</View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: "#f4f7f6"
  },
  logo: {
    height: 80
  },
  header: {
    padding: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
    color: "#000"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
