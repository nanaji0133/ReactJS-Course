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

                <input onChange={ () => this.props.handleFn(this.props.data.id) }
                    type="checkbox" className="checkbox"
                    checked={ this.props.data.completed }
                />

                <p style={ {
                    textDecoration: this.props.data.completed ?
                        "line-through" : "none"
                } }>
                    { this.props.data.task }
                </p>

            </div >
        );
    }
}



export default ToDoItem;