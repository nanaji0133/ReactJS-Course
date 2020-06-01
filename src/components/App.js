import React, { Component } from "react";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLogged: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick ()
    {
        this.setState((prevState) => ({
            isLogged: !prevState.isLogged
        })
        );
    }
    render ()
    {
        return (
            <div>
                { this.state.isLogged ? <h1>User logged in</h1> :
                    <h1>User logged out</h1> }
                <button onClick={ this.handleClick } >
                    { this.state.isLogged ? "log out" : "log in" }
                </button>
            </div>
        );
    }
}
export default App;