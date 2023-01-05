import {combineReducers} from "redux";
import preloaderReducer from "./preloaderReducer";
import alertReducer from "./alertReducer";
import usersListReducer from "./usersListReducer";


export const rootReducer = combineReducers({
  preloaderReducer,
  alertReducer,
  usersListReducer
})
