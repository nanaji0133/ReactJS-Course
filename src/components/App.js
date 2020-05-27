import React from "react";
import Header from "./Header";
import ToDoItem from "./ToDoItem";

export default App;

function App ()
{
    return (
        <div className="my-div">
            <Header />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    );
}