import React from "react";
import Greeting from "./Greeting";
import Heading from "./Heading";


class App extends React.Component
{
    render ()
    {
        return (
            <div>
                <Heading person={ {
                    name: "nanaji"
                } } />

                <Greeting />
            </div>
        );
    }
}

export default App;
