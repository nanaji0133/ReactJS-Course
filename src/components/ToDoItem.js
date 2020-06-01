import React from "react";

class ToDoItem extends React.Component
{

    render ()
    {
        const styles = {
            textDecoration: "line-through"
        };
        return (
            <div className="todoitem" >

                <input onChange={ () => this.props.handleFn(this.props.data.id) }
                    type="checkbox" className="checkbox"
                    checked={ this.props.data.completed }
                />

                <p style={ this.props.data.completed ? styles : null }>
                    { this.props.data.task }
                </p>

            </div >
        );
    }
}



export default ToDoItem;