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
            todoData: todoData
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange (id)
    {
        this.setState(prevState =>
        {
            let newtodoData = prevState.todoData.map(data =>
            {
                if (data.id == id)
                {
                    data.completed = data.completed ? false : true;
                }
                return data;
            });
            return ({
                todoData: newtodoData
            });
        });
    };


    render ()
    {
        let todoDataRender = this.state.todoData.map(
            data => <ToDoItem key={ data.id }
                handleFn={ this.handleChange }
                data={ data }
            />);
        return (

            < div className="my-div" >
                <Header />;
                { todoDataRender }
            </div >

        );
    }

}
export default App;
