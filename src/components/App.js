import React from "react";
import Greeting from "./Greeting";
import Heading from "./Heading";


class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name: "nanaji",
            answer: "no",
            msg: "How we can help you"
        };
    }
    render ()
    {
        return (
            <div>
                <Heading name={ this.state.name } />

                <Greeting />

                <h4>{ this.state.msg }</h4>
            </div>
        );
    }
}

export default App;
