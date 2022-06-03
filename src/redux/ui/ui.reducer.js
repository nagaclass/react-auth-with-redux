import i18next from "i18next";
import uiTypes from "./ui.types";

const initialState = {
  lang: "en",
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_LANGUAGE:
      i18next.changeLanguage(payload);
      return {
        ...state,
        lang: payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
