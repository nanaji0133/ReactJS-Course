import React, { useContext } from 'react';
import { ThemeContex } from '../context/ThemeContext';



const BookList = () =>
{
    const { isLight, light, dark } = useContext(ThemeContex);
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
};

export default BookList;

