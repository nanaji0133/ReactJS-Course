import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";

function App ()
{
    return (
        <div>
            <ThemeContextProvider>
                <Navbar />
                <BookList />
            </ThemeContextProvider>
        </div>
    );
}

export default App;