import React from "react";
import Header from "./Header";
import todoData from "./todoData";
import ToDoItem from "./ToDoItem";

export default App;

function App ()
{
    const renderData = todoData.map(data => <ToDoItem key={ data.id }
        taskData={ data }
    />);
    //     taskData={ {
    //         completed: data.completed,
    //         task: data.task
    //     } }
    // />);
    return (
        <div className="my-div">
            <Header />
            { renderData }
        </div>
    );
}