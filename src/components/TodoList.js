// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            <div>
                {props.todos.map(todo => (
                    <Todo  
                        key={todo.id}
                        todo={todo}
                        toggleTodo={props.toggleTodo}
                    />
                ))};
            </div>
            <button>
                onClick={(event) => props.clearDoneTodos(event)}
                Remove Thing(s) Done
            </button>
        </div>
    );
};
