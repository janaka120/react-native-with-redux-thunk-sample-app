import {
  FETCHING_USERS_REQUEST,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE
} from "./types";

export const fetchingUsersRequest = () => ({
  type: FETCHING_USERS_REQUEST
});

export const fetchingUsersSuccess = json => ({
  type: FETCHING_USERS_SUCCESS,
  payload: { json }
});

export const fetchingUserFailure = errors => ({
  type: FETCHING_USERS_FAILURE,
  payload: { errors }
});

export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchingUsersRequest());
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();

      dispatch(fetchingUsersSuccess(json.results));
    } catch (error) {
      dispatch(fetchingUserFailure(error));
    }
  };
};
