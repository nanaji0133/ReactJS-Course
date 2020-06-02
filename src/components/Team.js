import React, { Component } from "react";


class Team extends Component
{

    render ()
    {
        return (
            <div>
                <h1>Team name: { this.props.data.team_name } </h1>
                <p>Team rank: { this.props.data.team_rank }</p>
                <p>players: { this.props.data.players }</p>
            </div>
        );
    }
}
export default Team;