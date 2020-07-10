import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';


const BookDetail = (props) =>
{
    const { removeBook } = useContext(BookContext);

    return (
        <div>
            <ul>
                <li onClick={ () => removeBook(props.book.id) }>book name is { props.book.title } and author of book is { props.book.author }</li>
            </ul>
        </div>
    );
};

export default BookDetail;