import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiReducer from "./ui/ui.reducer";
import userAuthReducer from "./userAuth/userAuth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "userAuth"],
};

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  ui: uiReducer,
});

export default persistReducer(persistConfig, rootReducer);
