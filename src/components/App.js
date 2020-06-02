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
        const { name, value } = event.target;
        this.setState({

            [name]: value
        });
    }

    render ()
    {
        return (
            <div className="my-div" >
                <form>
                    <input name="firstname" type="text" value={ this.state.firstname }
                        placeholder="first name" onChange={ this.handleChange } />
                    <br />
                    <input name="lastname" type="text" value={ this.state.lastname }
                        placeholder="last name" onChange={ this.handleChange } />
                    <br />
                    <h1>{ this.state.firstname } { this.state.lastname }</h1>
                </form>
            </div>
        );
    }
}
export default App;