import React from "react";
import TodoListContainer from "../containers/TodoListContainer";
import TodoInputContainer from "../containers/TodoInputContainer";
import TodoFiltersContainer from "../containers/TodoFiltersContainer";

const App = () => (
  <div className="app-wrapper">
    <TodoInputContainer />
    <TodoFiltersContainer />
    <TodoListContainer />
  </div>
);
export default App;
