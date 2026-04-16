import React, { useContext, useEffect, useState } from 'react';
import { bookContextApi } from '../context/BookContext';
import AllBookMap from '../AllBookMap/AllBookMap';

const ShowAddToWishList = ({ shortingType }) => {
    
    const { AddToWishList } = useContext(bookContextApi);
    const [filterWishList, setFilterWishList] = useState(AddToWishList);
    useEffect(() => {
        if (shortingType) {
            if (shortingType === "pages") {
                const shortedData = [...AddToWishList].sort((a, b) => a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFilterWishList(shortedData);
            } else if (shortingType === "ratting") {
                const shortedData = [...AddToWishList].sort((a, b) => a.rating - b.rating);
                setFilterWishList(shortedData);
            }
        }
    }, [shortingType, AddToWishList])


    if (filterWishList.length === 0) {
        return <div className='h-[50vh] bg-base-300 container mx-auto flex justify-center items-center rounded-2xl'>
            <h2 className='text-2xl font-bold '>There Is Nothing In Wish List</h2>
        </div>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                filterWishList.map((book, ind) => <AllBookMap key={ind} book={book}></AllBookMap>)
            }
        </div>
    );
};

export default ShowAddToWishList;