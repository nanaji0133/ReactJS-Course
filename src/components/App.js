import React, { Component } from "react";


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            textarea: "",
            isChecked: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event)
    {
        const { name, value, type, checked } = event.target;
        console.log(event);
        name === "checkbox" ? this.setState({ isChecked: checked })
            : this.setState({ [name]: value });
        // const { name, value } = event.target;

        // this.setState((prevState) =>
        // {
        //     if (name === "checkbox")
        //     {
        //         return ({ checked: !prevState.checked });

        //     } else
        //     {
        //         return ({ [name]: value });
        //     }
        // });

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
                    <h1>{ this.state.firstname } { this.state.lastname } { this.state.textarea }</h1>
                    <br />
                    <textarea name="textarea" value={ this.state.textarea }
                        placeholder="type some text" onChange={ this.handleChange } />
                    <br />
                    <input onChange={ this.handleChange } name="checkbox"
                        checked={ this.state.isChecked } type="checkbox" />
                </form>
            </div>
        );
    };

}
export default App;