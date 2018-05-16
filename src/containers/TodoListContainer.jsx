import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import {
  toggleTodo,
  deleteTodo,
  toggleTodos,
  deleteTodos
} from "../actions/todosMap";
import { changeListFilter } from "../actions/listFilter";

let todos;

function filterTodos(todos = [], filter = "All") {
  let filteredTodos = todos;
  switch (filter) {
    case "All":
      break;
    case "Completed":
      filteredTodos = todos.filter(todo => todo.completed === true);
      break;
    case "Uncompleted":
      filteredTodos = todos.filter(todo => todo.completed === false);
      break;
    default:
  }
  return filteredTodos;
}

const mapState = ({ todosMap, todoFilter }) => {
  let filter = todoFilter.get("current");
  todos = Array.from(todosMap.values());
  todos = filterTodos(todos, filter);
  return {
    todos,
    filter
  };
};
const mapDispatch = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id));
  },
  deleteTodo: id => {
    dispatch(deleteTodo(id));
  },
  toggleTodosSelf: () => {
    dispatch(toggleTodos(todos));
  },
  deleteTodosSelf: () => {
    dispatch(deleteTodos(todos));
  },
  changeListFilter: filter => {
    dispatch(changeListFilter(filter));
  }
});
export default connect(mapState, mapDispatch)(TodoList);
