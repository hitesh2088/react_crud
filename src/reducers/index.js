import {combineReducers} from "redux";

import userReducer from "./usersReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  userReducer,
  statusReducer
})
