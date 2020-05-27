import React from "react";

export default ToDoItem;

function ToDoItem ()
{
    return (
        <div className="todoitem" >
            <input type="checkbox" className="checkbox" />
            <p>This is a paragraph</p>
        </div>
    );
}