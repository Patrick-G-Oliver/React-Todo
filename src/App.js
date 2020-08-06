import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    task: "bake bread",
    id: 1,
    completed: false
  },
  {
    task: "mow lawn",
    id: 2,
    completed: false
  },
  {
    task: "buy groceries",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos
    };
  };

  toggleTodo = todoId => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo, 
            done: !todo.done
          };
        }
        return todo;
      })
    });
  };

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearDoneTodos = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.done)
    });
  };

  render() {
    return (
      <div>
        <div className="header-and-form">
          <h1>Things to do...</h1>
          <TodoForm addTodo={this.addTodo} /> 
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearDoneTodos={this.clearDoneTodos}
        />
      </div>
    );
  };
};

export default App;
