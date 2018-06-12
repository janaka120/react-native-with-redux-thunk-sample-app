import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

const AppContainer = () => (
  <Provider>
    <App store={store} />
  </Provider>
);

AppRegistry.registerComponent("App", () => AppContainer);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
