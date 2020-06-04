import React, { Component } from "react";

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "hyd",
            ditery: {
                veg: false,
                kosher: false,
                lactosFree: false,
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event)
    {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? this.setState((prevState) =>
        {
            return {
                ditery:
                    prevState.ditery,
                [name]: checked
            };
        }) :
            this.setState({ [name]: value });
    }
    render ()
    {
        return (
            <div className="my-div">
                <form className="my-form">

                    <label>
                        First Name:
                        <input type="text" name="firstName" value={ this.state.firstName }
                            placeholder="first name" onChange={ this.handleChange } />

                    </label>

                    <br />
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={ this.state.lastName }
                            placeholder="last name" onChange={ this.handleChange } />

                    </label>

                    <br />
                    <label>
                        Age:
                        <input type="number" name="age" value={ this.state.age }
                            placeholder="age" onChange={ this.handleChange } />
                    </label>

                    <br />
                    <label>
                        Gender
                        <br />
                        <label>
                            Male:
                            <input type="radio" name="gender" value="male"
                                checked={ this.state.gender === "male" }
                                onChange={ this.handleChange } />
                        </label>
                        <br />
                        <label>
                            Female:
                            <input type="radio" name="gender" value="female"
                                checked={ this.state.gender === "female" }
                                onChange={ this.handleChange } />
                        </label>

                    </label>

                    <br />
                    <label>
                        location:
                        <select value={ this.state.location } name="location"
                            onChange={ this.handleChange }>
                            <option value="hyd"> hyd </option>
                            <option value="bglr"> bglr </option>
                            <option value="vizag"> vizag </option>
                        </select>
                    </label>

                    <br />

                    <label>
                        Ditery:
                        <br />
                        <label>
                            veg:
                        <input type="checkbox" name="veg" checked={ this.state.ditery.veg }
                                onChange={ this.handleChange } />
                        </label>

                        <br />
                        <label>
                            kosher:
                        <input type="checkbox" name="kosher" checked={ this.state.ditery.kosher }
                                onChange={ this.handleChange } />
                        </label>

                        <br />
                        <label>
                            lactosFree:
                        <input type="checkbox" name="lactosFree" checked={ this.state.ditery.lactosFree }
                                onChange={ this.handleChange } />
                        </label>


                    </label>

                    <div>
                        <p>First name: { this.state.firstName }</p>
                        <p>Last name: { this.state.lastName }</p>
                        <p>Age: { this.state.age }</p>
                        <p>Gender: { this.state.gender }</p>
                        <p>Location: { this.state.location }</p>
                        <p>Food: { this.state.ditery.veg && "veg, " } { this.state.ditery.kosher && "kosher, " }
                            { this.state.ditery.lactosFree && "lactosFree." }</p>
                    </div>

                </form>

            </div>
        );
    }
}

export default App;