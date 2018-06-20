import {
  FETCHING_USERS_REQUEST,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE
} from "../actions/types";

const initialstate = {
  isFeching: false,
  errorMessage: null,
  users: []
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCHING_USERS_REQUEST:
      return { ...state, isFeching: true };
    case FETCHING_USERS_FAILURE:
      return { ...state, isFeching: false, errorMessage: action.payload };
    case FETCHING_USERS_SUCCESS:
      return { ...state, isFeching: false, users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
