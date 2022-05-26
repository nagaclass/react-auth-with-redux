import userAuthTypes from "./userAuth.types";

const initialState = {
  isLoggedIn: null,
  roles: [],
  loggedInAs: null,
  personId: null,
};

const userAuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userAuthTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loggedInAs: payload.userType,
        roles: payload.userType === "user" ? (state.roles = [10]) : (state.roles = [100, 10]),
        personId: payload.personId,
      };
    case userAuthTypes.USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        loggedInAs: null,
        roles: [],
        personId: null,
      };

    default:
      return state;
  }
};

export default userAuthReducer;
