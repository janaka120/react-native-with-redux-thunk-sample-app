import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import SettingsReducer from "./SettingsReducer";

export default combineReducers({
  count: CounterReducer,
  settings: SettingsReducer
});
