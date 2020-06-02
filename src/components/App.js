import React, { Component } from "react";
import Team from "./Team";

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            loading: true,
            teamApi: {}
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
    render ()
    {
        // const teamDetails = this.state.teamApi.map(data => <Team key={ data.id }
        //     data={ data } />
        // );
        return (
            <div className="my-div">

                { this.state.loading ? <h4>Loading</h4> : this.state.teamApi.map(data =>
                    <Team key={ data.id }
                        data={ data } />) }

            </div>
        );
    }
}
export default App;