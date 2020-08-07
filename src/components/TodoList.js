// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo  
                    key={todo.id}
                    todo={todo}
                    toggleTodo={props.toggleTodo}
                />
            ))}
            <div className="removeButtonWrapper">
                <button
                    onClick={(event) => props.clearDoneTodos(event)}
                    className="remove-task-button">
                    Remove*
                </button>
            </div>
            <p className="instructions-p-tag">* Click on a task to mark as done. Then click "Remove" button to remove from list.</p>
        </div>
    );
};

export default TodoList;
