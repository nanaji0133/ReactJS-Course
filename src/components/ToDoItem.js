import React from "react";

class ToDoItem extends React.Component
{
    constructor()
    {
        super();
        // this.state = {
        //     textDecoration: this.props.completed ? "line-through" : "none"
        // };
    }

    render ()
    {
        return (
            <div className="todoitem" >
                <input type="checkbox" className="checkbox" checked={ this.props.completed } />
                <p style={ { textDecoration: this.props.completed ? "line-through" : "none" } }>
                    { this.props.task }
                </p>

            </div >
        );
    }
}



export default ToDoItem;