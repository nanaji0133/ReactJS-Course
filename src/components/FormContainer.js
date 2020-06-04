import React from "react";

function FormContainer (props)
{
    return (
        <div className="my-div">
            <form className="my-form">

                <label>
                    First Name:
                <input type="text" name="firstName" value={ props.firstName }
                        placeholder="first name" onChange={ props.handleChange } />

                </label>

                <br />
                <label>
                    Last Name:
                <input type="text" name="lastName" value={ props.lastName }
                        placeholder="last name" onChange={ props.handleChange } />

                </label>

                <br />
                <label>
                    Age:
                <input type="number" name="age" value={ props.age }
                        placeholder="age" onChange={ props.handleChange } />
                </label>

                <br />
                <label>
                    Gender
                <br />
                    <label>
                        Male:
                    <input type="radio" name="gender" value="male"
                            checked={ props.gender === "male" }
                            onChange={ props.handleChange } />
                    </label>
                    <br />
                    <label>
                        Female:
                    <input type="radio" name="gender" value="female"
                            checked={ props.gender === "female" }
                            onChange={ props.handleChange } />
                    </label>

                </label>

                <br />
                <label>
                    location:
                <select value={ props.location } name="location"
                        onChange={ props.handleChange }>
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
                <input type="checkbox" name="veg" checked={ props.veg }
                            onChange={ props.handleChange } />
                    </label>

                    <br />
                    <label>
                        kosher:
                <input type="checkbox" name="kosher" checked={ props.kosher }
                            onChange={ props.handleChange } />
                    </label>

                    <br />
                    <label>
                        lactosFree:
                <input type="checkbox" name="lactosFree" checked={ props.lactosFree }
                            onChange={ props.handleChange } />
                    </label>


                </label>

                <div>
                    <p>First name: { props.firstName }</p>
                    <p>Last name: { props.lastName }</p>
                    <p>Age: { props.age }</p>
                    <p>Gender: { props.gender }</p>
                    <p>Location: { props.location }</p>
                    <p>Food: { props.veg && "veg, " } { props.kosher && "kosher, " }
                        { props.lactosFree && "lactosFree." }</p>
                </div>

            </form>

        </div>
    );
}

export default FormContainer;