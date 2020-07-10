import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = (props) =>
{
    const { books } = useContext(BookContext);
    return (
        <div>
            <h1>Reading List Project using hooks and context</h1>
            <p>The number of available right now are { books.length }</p>
        </div>
    );
};

export default Navbar;