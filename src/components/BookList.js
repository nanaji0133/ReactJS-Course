import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContex } from '../context/ThemeContext';



const BookList = () =>
{
    const { isLight, light, dark } = useContext(ThemeContex);
    const { books } = useContext(BookContext);
    const theme = isLight ? light : dark;

    return (
        <div className="booklist"
            style={ { backgroundColor: theme.bg, color: theme.syntex } }>
            <ul>
                { books.map(book => <li key={ book.id } style={ { backgroundColor: theme.ui } }>{ book.title }</li>) }
            </ul>
        </div>
    );
};

export default BookList;

