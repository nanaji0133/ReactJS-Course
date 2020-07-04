import React from "react";

function Conrender (props)
{

    if (!props.value)
    {
        return null;
    }

    return (
        <div>
            Hello
        </div>
    );
}

export default Conrender;