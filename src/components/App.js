import React from "react";
import Header from "./Header";
import todoData from "./todoData";
import ToDoItem from "./ToDoItem";


class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            todoData: todoData.map(data => <ToDoItem key={ data.id } completed={ data.completed }
                task={ data.task } />),
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick ()
    {
        // this.setState({ count: 1 });
        this.setState(preState =>
        {
            console.log(preState.count);
            return ({
                count: preState.count + 1
            });
        });
    }

    render ()
    {
        return (
            <div className="my-div">
                <Header />
                <h1>{ this.state.count }</h1>
                <button onClick={ this.handleClick }>Click</button>

                {/* { this.state.todoData } */ }
            </div>

        );
    }
}

export default App;
