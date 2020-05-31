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
                task={ data.task } />)
        };
    }

    render ()
    {
        return (
            <div className="my-div">
                <Header />
                { this.state.todoData }
            </div>

        );
    }
}

export default App;
