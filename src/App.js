import React, { Component } from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';

class App extends Component
{
    render ()
    {
        return (
            <div>
                <BookContextProvider>
                    <Navbar />
                    <BookList />
                </BookContextProvider>
            </div>
        );
    }
}

export default App;