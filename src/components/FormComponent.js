import React, { Component } from "react";
import FormContainer from "./FormContainer";

class Form extends Component
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
            veg: false,
            kosher: false,
            lactosFree: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event)
    {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) :
            this.setState({ [name]: value });
    }
    render ()
    {
        return (
            <FormContainer
                handleChange={ this.handleChange }
                { ...this.state }
            />
        );
    }
}

export default Form;