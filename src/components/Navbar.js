import React, { useContext } from 'react';
import { AuthContex } from '../context/AuthContext';
import { ThemeContex } from '../context/ThemeContext';


const Navbar = () =>
{
    const { isLight, light, dark } = useContext(ThemeContex);
    const { isAuthenticated, handleAuthChange } = useContext(AuthContex);
    const theme = isLight ? light : dark;
    return (
        <div className="navbar"
            style={ { backgroundColor: theme.bg, color: theme.syntex } }>
            <h1>Contex app</h1>
            <div onClick={ handleAuthChange }>
                { isAuthenticated ? "Logged in" : "Logged out" }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
