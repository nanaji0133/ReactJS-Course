import React, { Component } from "react";
import Conrender from "./Conrender";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            value: false
        };
    }

    componentDidMount ()
    {
        this.interval = setInterval(this.clock(), 1000);
        document.title = "clock";
    }
    clock ()
    {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    componentWillMount ()
    {
        clearInterval(this.interval);
    }

    render ()
    {
        return (

            <div>
                { this.state.time }
                <Conrender value={ this.state.value } />
            </div >
        );
    }
}

export default App;