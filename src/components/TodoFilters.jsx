import React from "react";
import TodoFilter from "./TodoFilter";
import { Button } from "semantic-ui-react";

const TodoFilters = ({ acceptedFilters, changeListFilter }) => (
  <Button.Group className="filter">
    {acceptedFilters.map(filter => (
      <TodoFilter
        filter={filter}
        key={filter}
        changeListFilterSelf={changeListFilter.bind(undefined, filter)}
      />
    ))}
  </Button.Group>
);
export default TodoFilters;
