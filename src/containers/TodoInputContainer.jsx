import { connect } from "react-redux";
import TodoInput from "../components/TodoInput";
import { addTodo } from "../actions/todosMap";
const mapDispatch = dispatch => ({
  addTodo: content => {
    dispatch(addTodo(content));
  }
});
export default connect(undefined, mapDispatch)(TodoInput);
