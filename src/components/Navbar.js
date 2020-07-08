import React, { Component } from 'react';

class Navbar extends Component
{

    render ()
    {
        return (
            <div className="navbar">
                <h1>Contex app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;