import React from "react";

class Heading extends React.Component
{
    render ()
    {
        return (
            <div>
                <h1>Welcome { this.props.person.name } </h1>
            </div>
        );
    }
}

export default Heading;