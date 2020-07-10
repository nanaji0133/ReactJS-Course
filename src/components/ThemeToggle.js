import React, { useContext } from 'react';
import { ThemeContex } from '../context/ThemeContext';


const ThemeToggle = () =>
{
    const { handleChange } = useContext(ThemeContex);
    return (
        <button onClick={ handleChange }>Toggle the theme</button>
    );
};

export default ThemeToggle;
