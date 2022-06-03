import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTransition from "./lang/en.json";
import FrTransition from "./lang/fr.json";
import JpTransition from "./lang/jp.json";
import { store } from "./redux/store";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EnTransition,
    },
    fr: {
      translation: FrTransition,
    },
    jp: {
      translation: JpTransition,
    },
  },
  lng: store.getState().ui.lang,
  fallbackLng: store.getState().ui.lang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
