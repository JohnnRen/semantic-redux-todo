import { cloneMap } from "../helpers/index";
import todoFilterInitial from "../models/todoFilterInitial";
export default (todoFilter = todoFilterInitial, action) => {
  switch (action.type) {
    case "CHANGE_LIST_FILTER":
      let { filter } = action;
      todoFilter.set(
        "current",
        todoFilter.get("accepted").includes(filter)
          ? filter
          : todoFilter.get("current")
      );
      break;
    default:
  }
  return cloneMap(todoFilter);
};
