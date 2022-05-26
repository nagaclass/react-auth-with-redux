import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import companyReducer from "./company/company.reducer";
import personTabsReducer from "./person-tabs/personTabs.reducer";
import personsReducer from "./persons/persons.reducer";
import uiReducer from "./ui/ui.redusers";
import userReducer from "./user/user.reducer";
import userAuthReducer from "./userAuth/userAuth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "user", "userAuth"],
};

const rootReducer = combineReducers({
  person: personsReducer,
  ui: uiReducer,
  company: companyReducer,
  tabs: personTabsReducer,
  user: userReducer,
  userAuth: userAuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
