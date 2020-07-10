import React from 'react';
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";

function App ()
{
    return (
        <div>
            <div>
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Navbar />
                        <BookList />
                    </AuthContextProvider>
                    <ThemeToggle />
                </ThemeContextProvider>
            </div>
            {/* <SongList /> */ }
        </div>
    );
}

export default App;

