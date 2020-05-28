import React from "react";



function ToDoItem (props)
{
    let styles = {
        textDecoration: props.taskData.completed ? "line-through"
            : "none"
    };
    return (
        <div className="todoitem" >
            <input type="checkbox" className="checkbox" checked={ props.taskData.completed } />
            <p style={ styles }>
                { props.taskData.task }</p>
        </div>
    );
}

export default ToDoItem;