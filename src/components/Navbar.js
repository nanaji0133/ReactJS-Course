import React, { Component } from 'react';
import { AuthContex } from '../context/AuthContext';
import { ThemeContex } from '../context/ThemeContext';

class Navbar extends Component
{
    // static contextType = ThemeContex;
    render ()
    {
        return (
            <AuthContex.Consumer>{ authContext => (
                <ThemeContex.Consumer>{ themeContext =>
                {
                    const { isAuthenticated, handleAuthChange } = authContext;
                    const { isLight, light, dark } = themeContext;
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
                } }</ThemeContex.Consumer>
            ) }
            </AuthContex.Consumer>
        );
    }
}

export default Navbar;