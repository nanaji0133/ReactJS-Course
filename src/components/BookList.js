import React, { Component } from 'react';
import { ThemeContex } from '../context/ThemeContext';

class BookList extends Component
{
    static contextType = ThemeContex;
    render ()
    {
        const { isLight, light, dark } = this.context;
        const theme = isLight ? light : dark;
        return (
            <div className="booklist"
                style={ { backgroundColor: theme.bg, color: theme.syntex } }>
                <ul>
                    <li style={ { backgroundColor: theme.ui } }>Book 1</li>
                    <li style={ { backgroundColor: theme.ui } }>Book 2</li>
                    <li style={ { backgroundColor: theme.ui } }>Book 3</li>
                </ul>
            </div>
        );
    }
}

export default BookList;