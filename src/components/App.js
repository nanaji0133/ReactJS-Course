import React, { Component } from "react";

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            msgs: [
                "one msg", "two msg"
            ]
        };
    }

    render ()
    {
        return (
            <div>{ this.state.msgs.length > 0 &&
                <h1>you have { this.state.msgs.length } msg</h1> }
            </div>
        );
    }
}

export default App;