import React, { useContext } from 'react';
import { bookContextApi } from '../context/BookContext';

const Book = () => {
    const {AddToRead} = useContext(bookContextApi);
    console.log(AddToRead)
    return (
        <div>
            <p>Books</p>
        </div>
    );
};

export default Book;