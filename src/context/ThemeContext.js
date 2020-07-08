

import React, { Component, createContext } from 'react';

export const ThemeContex = createContext();

class ThemeContexProvider extends Component
{
    state = {
        isLight: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };

    handleChange = (event) =>
    {
        this.setState({ isLight: !this.state.isLight });
    };
    render ()
    {
        return (
            <ThemeContex.Provider value={ { ...this.state, handleChange: this.handleChange } }>
                { this.props.children }
            </ThemeContex.Provider>
        );
    }
}

export default ThemeContexProvider;