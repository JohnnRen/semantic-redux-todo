import React from "react";
import { Checkbox, Button } from "semantic-ui-react";
import classNames from "classnames";
const TodoItem = ({ todo, toggleSelf, deleteSelf }) => {
  return (
    <div className="todo-item">
      <Checkbox
        className={classNames(
          "todo-content",
          todo.completed ? "completed" : ""
        )}
        onClick={toggleSelf}
        checked={todo.completed}
        label={todo.content}
      />
      <Button
        circular
        compact
        className="delete-btn"
        icon="close"
        onClick={deleteSelf}
      />
    </div>
  );
};
export default TodoItem;
