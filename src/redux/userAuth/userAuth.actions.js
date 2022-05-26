import userAuthTypes from "./userAuth.types";

export const userLogin = payload => ({
  type: userAuthTypes.USER_LOGIN,
  payload,
});

export const userLogout = () => ({
  type: userAuthTypes.USER_LOGOUT,
});
