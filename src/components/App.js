import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
export default App;


function App ()
{
    const firstName = "nanaji";
    const lastName = "sanka";
    const date = new Date();
    return (
        <div>
            <Header />
            <h1>{ `${firstName} ${lastName} time is ${date.getDate()} ${date.getMonth()}` }</h1>
            <MainContent />
            <Footer />
        </div>
    );
}