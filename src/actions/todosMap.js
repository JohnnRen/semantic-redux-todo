export const addTodo = content => ({
  type: "ADD_TODO",
  content
});
export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});
export const deleteTodos = todos => (dispatch, getState) => {
  todos.forEach(({ id }) => {
    dispatch(deleteTodo(id));
  });
};
export const setTodo = (id, completed) => ({
  type: "SET_TODO",
  id,
  completed
});
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
export const toggleTodos = todos => (dispatch, getState) => {
  let target = !todos.every(todo => todo.completed);
  todos.forEach(({ id }) => {
    dispatch(setTodo(id, target));
  });
};
