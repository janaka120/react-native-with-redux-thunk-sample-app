import { CHANGE_THEME } from "../actions/types";

const initialState = {
  theme: "dark"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      let theme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: theme };
    default:
      return state;
  }
};
