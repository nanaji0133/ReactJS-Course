import React from "react";
import ContactCard from "./ContactCard";

export default App;

function App ()
{
    return (
        <div className="contacts">
            <ContactCard
                contact={ {
                    name: "rohit", imgUrl: "/pictures/rohit.jpeg",
                    number: 1234, email: "rohit@gmail.com"
                } }
            />
            <ContactCard
                contact={ {
                    name: "dhoni", imgUrl: "/pictures/dhoni.jpeg",
                    number: 1234, email: "dhoni@gmail.com"
                } }
            />
            <ContactCard
                contact={ {
                    name: "virat", imgUrl: "/pictures/virat.jpeg",
                    number: 1234, email: "virat@gmail.com"
                } }
            />
            <ContactCard
                contact={ {
                    name: "bhuvi", imgUrl: "/pictures/bhuvi.jpeg",
                    number: 1234, email: "bhuvi@gmail.com"
                } }
            />
        </div>
    );
}