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
            [event.target.name]: event.target.value
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
                    value={this.state.todo}
                    name="todo"
                    placeholder="Type your task here."
                    onChange={this.handleChange}
                />
                <div className="addButtonWrapper">
                    <button className="add-task-button">
                        Add a Task
                    </button>
                </div>
            </form>
        );
    };
};

export default TodoForm;