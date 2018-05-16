import React from "react";
import { Button } from "semantic-ui-react";

const TodoFilter = ({ filter, changeListFilterSelf }) => (
  <Button className="filter-btn" onClick={changeListFilterSelf}>
    {filter}
  </Button>
);
export default TodoFilter;
