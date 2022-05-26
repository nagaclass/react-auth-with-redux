import userTypes from "./user.types";

const initialState = {
  loading: false,
  user: null,
  error: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_NEW_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
      };
    case userTypes.LOGIN_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case userTypes.LOGIN_NEW_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        error: payload,
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
