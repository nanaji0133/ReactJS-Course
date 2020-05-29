import React from "react";

class Greeting extends React.Component
{
    Hour ()
    {
        const hour = new Date().getHours();
        const dayWish = hour < 12 ? "Morning" : "Evening";
        return dayWish;
    }
    render ()
    {
        return (
            <div>
                <p>
                    Good { this.Hour() } sir.
                </p>
            </div>
        );
    }
}

export default Greeting;