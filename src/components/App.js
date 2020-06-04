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
            gender: "",
            color: "blue",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event)
    {
        const { name, value, type, checked } = event.target;
        console.log(event);
        name === "checkbox" ? this.setState({ isChecked: checked })
            : this.setState({ [name]: value });
    }

    handleSubmit (event)
    {
        try
        {
            alert(this.state.color + this.state.gender);
        } catch {
            alert(Error);
        }
        finally
        {
            event.prevetDefault();
        }
    }


    render ()
    {
        return (
            <div className="my-div" >
                <form onSubmit={ this.handleSubmit } >

                    <input name="firstname" type="text" value={ this.state.firstname }
                        placeholder="first name" onChange={ this.handleChange } />
                    <br />

                    <input name="lastname" type="text" value={ this.state.lastname }
                        placeholder="last name" onChange={ this.handleChange } />
                    <br />

                    <br />

                    <textarea name="textarea" value={ this.state.textarea }
                        placeholder="type some text" onChange={ this.handleChange } />
                    <br />

                    <input onChange={ this.handleChange } name="checkbox"
                        checked={ this.state.isChecked } type="checkbox" />
                    <br />

                    <label>
                        <input type="radio" name="gender" onChange={ this.handleChange }
                            value="male" checked={ this.state.gender === "male" } />
                        male
                    </label>

                    <br />
                    <label>
                        <input type="radio" name="gender" onChange={ this.handleChange }
                            value="female" checked={ this.state.gender === "female" } />
                        female
                    </label>

                    <br />
                    <label>
                        <select value={ this.state.color } name="color"
                            onChange={ this.handleChange } >
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="red">red</option>
                        </select>
                    </label>

                    <br />
                    <button>Submit</button>

                    <h1>{ `${this.state.firstname} ${this.state.lastname}
                    ${ this.state.textarea} ${this.state.isChecked ? "true" : "false"}
                    ${ this.state.gender} ${this.state.color}` }
                    </h1>


                </form>
            </div>
        );
    };

}
export default App;