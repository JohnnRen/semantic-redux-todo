import { combineReducers } from "redux";
import todosMap from "./todosMap";
import todoFilter from "./todoFilter";

export default combineReducers({
  todosMap,
  todoFilter
});
