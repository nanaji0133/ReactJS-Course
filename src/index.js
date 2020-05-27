import React from "react";
import ReactDOM from "react-dom";

function MyApp ()
{
    return (
        <div>
            <ul>
                <li>first item</li><li>second item</li><li>third item</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("root"));