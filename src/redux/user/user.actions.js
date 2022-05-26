import { API_INSTANCE } from "../../api";
import userTypes from "./user.types";

export const Login_user = userData => async dispatch => {
  dispatch({
    type: userTypes.LOGIN_NEW_USER_REQUEST,
  });

  try {
    const { data } = await API_INSTANCE.post(`/login`, userData);

    dispatch({
      type: userTypes.LOGIN_NEW_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.LOGIN_NEW_USER_FAILED,
      payload: error,
    });
  }
};

export const userLogout = () => ({
  type: userTypes.USER_LOGOUT,
});
