import React, { Component } from "react";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount ()
    {
        this.interval = setInterval(() => this.clock(), 1000);
    }
    clock ()
    {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    componentWillMount() {
        clearInterval(this.interval)
    }

    render ()
    {
        return (

            <div>
                { this.state.time}
            </div >
        );
    }
}

export default App;