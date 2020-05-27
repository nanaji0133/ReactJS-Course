import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import MainContent from "./MainContent";
export default App;


function App ()
{
    const hours = new Date().getHours();
    console.log(hours);
    let styles = {
        margin: 0,
        height: 100,
        fontSize: 30,
        color: "blue",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
    };

    let day = hours < 12 ? "morning" : hours > 12 && hours < 17 ? "evening" : "night";
    styles.color = (day === "morning") ? "orange" : "blue";

    return (
        <div>
            <h1 style={ styles }>Good { day }</h1>
        </div>
    );
}