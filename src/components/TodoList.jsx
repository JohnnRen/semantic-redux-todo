import React from "react";
import TodoItem from "./TodoItem";
import classNames from "classnames";
import { Button } from "semantic-ui-react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

const TodoList = ({
  todos,
  filter,
  toggleTodo,
  deleteTodo,
  toggleTodosSelf,
  deleteTodosSelf
}) => {
  let empty = todos.length === 0;
  let isFilterCompleted = filter === "Completed";
  return (
    <div className="list-wrapper">
      <ReactCSSTransitionGroup
        className="list"
        component="ul"
        
        transitionName="fade"
        transitionEnterTimeout={200}
        transitionLeave={false}
      >
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            toggleSelf={toggleTodo.bind(undefined, todo.id)}
            deleteSelf={deleteTodo.bind(undefined, todo.id)}
            key={todo.id}
          />
        ))}
      </ReactCSSTransitionGroup>
      <Button
        className={classNames("list-btn")}
        disabled={empty}
        onClick={isFilterCompleted ? deleteTodosSelf : toggleTodosSelf}
      >
        {isFilterCompleted ? "Delete All" : "Complete All"}
      </Button>
    </div>
  );
};
export default TodoList;
