import React, { Component } from 'react';
import { ThemeContex } from '../context/ThemeContext';

class Navbar extends Component
{
    static contextType = ThemeContex;
    render ()
    {
        const { isLight, light, dark } = this.context;
        const theme = isLight ? light : dark;
        return (
            <div className="navbar"
                style={ { backgroundColor: theme.bg, color: theme.syntex } }>
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