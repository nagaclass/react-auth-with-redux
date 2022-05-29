import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userAuthReducer from "./userAuth/userAuth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "user", "userAuth"],
};

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
