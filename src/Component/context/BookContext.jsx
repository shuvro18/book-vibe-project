import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const bookContextApi = createContext();


const BookContext = ({ children }) => {


    const [AddToRead, setAddToRead] = useState([]);
    const handleAddToRead = (currentBook) => {
        const isExitBook = AddToRead.find(book => book.bookId === currentBook.bookId);

        if (isExitBook) {
            toast.warn("book already exist in Read List");
        } else {
            toast.success(`${currentBook.bookName} added to Read List`)
            setAddToRead([...AddToRead, currentBook])
        }

    }

    const [AddToWishList, setAddToWishList] = useState([]);
    const handleAddToWishList = (currentBook) => {
        const isExistReadList = AddToRead.find(book => book.bookId === currentBook.bookId);
        if (isExistReadList) {
            toast.error(`${currentBook.bookName} already in Read List`);
            return;
        }

        const isExitWishList = AddToWishList.find(book => book.bookId === currentBook.bookId);
        if (isExitWishList) {
            toast.warn("book already exist in Wish List")
        } else {
            toast.success(`${currentBook.bookName} added to Wish List`)
            setAddToWishList([...AddToWishList, currentBook])
        }
    }
    const data = {
        handleAddToRead,
        AddToRead,
        setAddToRead,
        handleAddToWishList,
        AddToWishList,
        setAddToWishList,
    }


    return (

        <bookContextApi.Provider value={data}>
            {children}
        </bookContextApi.Provider>

    );
};

export default BookContext;