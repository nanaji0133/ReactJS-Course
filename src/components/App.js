import React, { Component } from "react";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            firstname: "",
            lastname: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event)
    {
        this.setState({

            [event.target.name]: event.target.value
        });
    }

    render ()
    {
        return (
            <div className="my-div" >
                <form>
                    <input name="firstname" type="text"
                        placeholder="first name" onChange={ this.handleChange } />
                    <br />
                    <input name="lastname" type="text"
                        placeholder="last name" onChange={ this.handleChange } />
                    <br />
                    <h1>{ this.state.firstname } { this.state.lastname }</h1>
                </form>
            </div>
        );
    }
}
export default App;