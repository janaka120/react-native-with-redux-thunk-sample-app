import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import CusButton from "./components/CustomButton";
import { connect } from "react-redux";
import { counterIncrement, counterDecrement, themeChange } from "./actions";

const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

class App extends Component {
  render() {
    const { theme } = this.props.settings;
    let appBackgroundColor = "#f4f7f6";
    let titleColor = "#000000";
    let lineColor = "#e7e9ee";
    let screenTextColor = "#000000";
    let operationButtonBorderColor = "#ffffff";
    let operationButtonBackgroundColor = "#FF9398";
    let operationButtonBackgroundTextColor = "#ffffff";
    let textColor = "#000000";
    let themeButtonBackgroundColor = "#313131";
    let themeButtonTextColor = "#fcfcfc";

    if (this.props.settings.theme === "light") {
      appBackgroundColor = "#2e2e2e";
      titleColor = "#797979";
      lineColor = "#000";
      screenTextColor = "#fde600";
      operationButtonBackgroundColor = "#2e2e2e";
      operationButtonBorderColor = "#fde600";
      operationButtonBackgroundTextColor = "#fde600";
      textColor = "#797979";
      themeButtonBackgroundColor = "#313131";
      themeButtonTextColor = "#fcfcfc";
    }

    return (
      <View style={[styles.app, { backgroundColor: appBackgroundColor }]}>
        <View style={styles.header}>
          <Image
            accessibilityLabel="React...."
            source={{ uri: logoUri }}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={[styles.title, { color: titleColor }]}>
            React-Native Redux Sample Counter App
          </Text>
        </View>
        <View style={[styles.screenContainer, { borderColor: lineColor }]}>
          <Text style={[styles.screenText, { color: screenTextColor }]}>
            {this.props.count}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CusButton
            buttonViewContainer={styles.buttonViewContainer}
            buttonContainer={[
              styles.button,
              {
                backgroundColor: operationButtonBackgroundColor,
                borderColor: operationButtonBorderColor
              }
            ]}
            titleStyle={[{ color: operationButtonBackgroundTextColor }]}
            onPress={this.props.counterDecrement}
            title="Minus"
          />
          <CusButton
            buttonViewContainer={styles.buttonViewContainer}
            buttonContainer={[
              styles.button,
              {
                backgroundColor: operationButtonBackgroundColor,
                borderColor: operationButtonBorderColor
              }
            ]}
            titleStyle={[{ color: operationButtonBackgroundTextColor }]}
            onPress={this.props.counterIncrement}
            title="Plus"
          />
        </View>
        <View style={[styles.settingsContainer, { borderColor: lineColor }]}>
          <Text style={[styles.settingsText, { color: textColor }]}>
            Settings
          </Text>
          <View style={styles.themeContainer}>
            <Text style={[styles.themeTitle, { color: textColor }]}>Theme</Text>
            <View style={styles.themeButtonContainor}>
              <CusButton
                title={theme}
                buttonContainer={[
                  styles.themeButton,
                  { backgroundColor: themeButtonBackgroundColor }
                ]}
                titleStyle={[
                  styles.themeButtonText,
                  { color: themeButtonTextColor }
                ]}
                onPress={this.props.themeChange}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    settings: state.settings
  };
}

export default connect(mapStateToProps, {
  counterIncrement,
  counterDecrement,
  themeChange
})(App);

const styles = StyleSheet.create({
  app: {
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
  screenContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 50,
    borderColor: "#e7e9ee",
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50
  },
  screenText: {
    textAlign: "center",
    fontSize: "1.5rem"
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20
  },
  buttonViewContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: "#FF9398",
    borderWidth: 2,
    padding: 4
  },
  settingsContainer: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    borderColor: "#e7e9ee",
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  settingsText: {
    fontSize: "1.1rem",
    color: "#000"
  },
  themeContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 20,
    alignItems: "center"
  },
  themeTitle: {
    fontSize: "1rem",
    color: "#000"
  },
  themeButtonContainor: {
    marginLeft: 10
  },
  themeButton: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#313131",
    // borderWidth: 1,
    // borderColor: "#fff",
    padding: 2
  },
  themeButtonText: {
    fontSize: "1.2rem",
    color: "#fcfcfc"
  }
});
