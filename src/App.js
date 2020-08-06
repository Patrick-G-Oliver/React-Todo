import React from 'react';

const todos = [
  {
    task: "bake bread",
    id: Date.now(),
    completed: false
  },
  {
    task: "mow lawn",
    id: Date.now(),
    completed: false
  },
  {
    task: "buy groceries",
    id: Date.now(),
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
        };
      })
    });
  };

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTask = {
      task: todo,
      id: Date.now(),
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
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
        <h1>Things to do...</h1>
      </div>
    );
  }
}

export default App;
