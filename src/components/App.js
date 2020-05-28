import React from "react";
import data from "./Data";
import Fullname from "./Fullname";

export default App;



function App ()
{
    const contactData = data.map(data => <Fullname key={ data.id }
        details={ {
            firstname: data.firstname,
            secondname: data.secondname
        } }


    />);
    return (
        <div>
            { contactData }
        </div>
    );
}