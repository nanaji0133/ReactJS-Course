import React, { Component } from 'react';
import { ThemeContex } from '../context/ThemeContext';

class ThemeToggle extends Component
{
    static contextType = ThemeContex;
    render ()
    {
        const { handleChange } = this.context;
        return (
            <button onClick={ handleChange }>Toggle the theme</button>
        );
    }
}

export default ThemeToggle;