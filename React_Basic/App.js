import React from "react";
import { Todo } from "./Todo";
import "./styles.css";

let id = 0;
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const text = prompt("Todo text Please?");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:{" "}
          {this.state.todos.filter(todo => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul className="ul-style">
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              removeTodo={() => this.removeTodo(todo.id)}
              check={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
