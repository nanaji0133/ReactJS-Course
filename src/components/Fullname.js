import React from "react";

export default Fullname;

function Fullname (props)
{
    return (
        <div>
            <h3>first name: { props.details.firstname }</h3>
            <p>second name: { props.details.secondname }</p>
        </div>
    );
}