import SongList from "./components/Hooks/SongList";
import "./index.css";
import React from 'react';

function App ()
{
    return (
        <div>
            <SongList />
        </div>
    );
}

export default App;

{/* <div>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookList />
                </AuthContextProvider>
                <ThemeToggle />
            </ThemeContextProvider>
        </div> */}