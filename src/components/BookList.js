import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetail from './BookDetail';
import BookForm from './BookForm';

const BookList = () =>
{
    const { books } = useContext(BookContext);
    return (
        <div>
            { books.length !== 0 ? books.map(book => <BookDetail book={ book } key={ book.id } />)
                : "No books to read" }

            <BookForm />
            
        </div>
    );
};

export default BookList;