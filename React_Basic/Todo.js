import React from "react";

export const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.check}
    />
    <span>{props.todo.text}</span>
    <button onClick={props.removeTodo}> delete</button>
  </li>
);
