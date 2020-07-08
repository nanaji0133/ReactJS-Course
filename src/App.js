import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import "./index.css";

function App ()
{
    return (
        <div>
            <Navbar />
            <BookList />
        </div>
    );
}

export default App;