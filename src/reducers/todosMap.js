import { getRandomId } from "../helpers/index";
import { cloneMap } from "../helpers/index";
import Todo from "../models/Todo";
export default (todosMap = new Map([]), action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let { content } = action;
      let id;
      while (!id || todosMap.has(id)) {
        id = getRandomId();
      }
      todosMap.set(id, new Todo(id, content));
      break;
    }
    case "DELETE_TODO": {
      let { id } = action;
      todosMap.delete(id);
      break;
    }
    case "SET_TODO": {
      let { id, completed } = action;
      let target = todosMap.get(id);
      target.completed = completed;
      break;
    }
    case "TOGGLE_TODO": {
      let { id } = action;
      let target = todosMap.get(id);
      target.completed = !target.completed;
      break;
    }

    default:
  }

  return cloneMap(todosMap);
};
