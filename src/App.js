import React, { Component } from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import UserList from "./components/UserList";
import { fetchUsers } from "./redux/actions/userActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let data = this.props.data;
    let content = data.isFeching ? (
      <ActivityIndicator size="large" />
    ) : (
      <UserList users={data.users.json} />
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

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, { fetchUsers })(App);

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
