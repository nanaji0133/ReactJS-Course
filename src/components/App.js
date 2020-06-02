import React, { Component } from "react";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            value: "item 1"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event)
    {
        this.setState({ value: event.target.value });
    }

    handleSubmit (event)
    {
        alert("entered value:" + this.state.value);
        this.setState({ value: "" });
        event.preventDefault();
    }

    render ()
    {
        return (
            <div className="my-div" onSubmit={ this.handleSubmit }>
                <form className="my-form" >
                    {/* <label>
                        <input type="text" value={ this.state.value }
                            onChange={ this.handleChange } />

                    </label>

                    <textarea value={ this.state.value }
                        onChange={ this.handleChange }
                        style={ { width: "50vw",  } } /> */}

                    <select value={ this.state.value }
                        onChange={ this.handleChange }>
                        <option value="item 1">item 1</option>
                        <option value="item 2">item 2</option>
                        <option value="item 3">item 3</option>
                    </select>

                    <label>
                        <input type="submit" value="submit" />
                    </label>

                </form>
            </div>
        );
    }
}
export default App;