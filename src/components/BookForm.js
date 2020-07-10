import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';


const BookForm = (props) =>
{

    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addBook(title, author);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } />
            <input type="text" name="author" value={ author } onChange={ (e) => setAuthor(e.target.value) } />
            <button>Add a book</button>
        </form>
    );
};

export default BookForm;