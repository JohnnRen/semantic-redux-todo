import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import todoFilterInitial from "./models/todoFilterInitial";
import { addTodo } from "./actions/todosMap";
import App from "./components/App";

const initialState = {
  todoFilter: todoFilterInitial
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(addTodo("Learn react router"));
store.dispatch(addTodo("Try async with thunk"));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
