import React, { Component, createContext } from 'react';

export const AuthContex = createContext();

class AuthContextProvider extends Component
{
    state = { isAuthenticated: false };

    handleAuthChange = (event) =>
    {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    };
    render ()
    {
        return (
            <AuthContex.Provider value={ { ...this.state, handleAuthChange: this.handleAuthChange } }>
                { this.props.children }
            </AuthContex.Provider >
        );
    }
}

export default AuthContextProvider;