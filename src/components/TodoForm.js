import React, { Component } from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    };

    handleChange = event => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTodo = event => {
        event.preventDefault();
        this.setState({ todo: "" })
        this.props.addTodo(event, this.state.todo);
    };

    render() {
        console.log("TodoForm rendered")
        return (
            <form onSubmit={this.submitTodo}>
                <input 
                    type="text"
                    value="this.state.todo"
                    name="todo"
                    onChange={this.handleChange}
                />
                <button>
                    Add a Task
                </button>
            </form>
        );
    };
};

export default TodoForm;