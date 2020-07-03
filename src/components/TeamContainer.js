import React, { Component } from "react";
import Team from "./Team";

class TeamContainer extends Component
{
    constructor()
    {
        super();
        this.state = {
            loading: true,
            teamApi: {},
            title: "",
            body: "",
        };
    }

    componentDidMount ()
    {
        fetch("http://127.0.0.1:8000/team/")
            .then(response => response.json())
            .then(data =>
            {
                this.setState({ teamApi: data });
                this.setState({ loading: false });
                console.log(this.state.teamApi);
            });
    }

    handleChange = (event) =>
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(value)
    };

    render ()
    {
        // const teamDetails = this.state.teamApi.map(data => <Team key={ data.id }
        //     data={ data } />
        // );
        return (
            <div className="my-div" >

                { this.state.loading ? <h4>Loading</h4> : this.state.teamApi.map(data =>
                    <Team key={ data.id }
                        data={ data } />) }

                <form className="form" >
                    <label>
                        Title:
                        <input type="text" value={ this.state.title }
                            name="title" onChange={ this.handleChange } />
                    </label>



                    <label>
                        Body:
                        <textarea value={ this.state.body }
                            name="body" onChange={ this.handleChange } />
                    </label>

                    <button>Submit</button>

                </form>

            </div>
        );
    }
}
export default TeamContainer;