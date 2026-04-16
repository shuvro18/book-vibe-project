import React, { useContext, useEffect, useState } from 'react';
import { bookContextApi } from '../context/BookContext';
import AllBookMap from '../AllBookMap/AllBookMap';

const ShowAddToRead = ({shortingType}) => {
    

    const { AddToRead } = useContext(bookContextApi);
    const [filterReadList, setFilterReadList] = useState(AddToRead);
    useEffect(()=>{
        if(shortingType){
            if(shortingType === "pages"){
                const shortedData = [...AddToRead].sort((a,b)=> a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFilterReadList(shortedData);
            }else if(shortingType === "ratting"){
                const shortedData = [...AddToRead].sort((a,b)=> a.rating - b.rating);
                setFilterReadList(shortedData);
            }
        }
    },[shortingType,AddToRead])

    if (filterReadList.length === 0) {
        return <div className='h-[50vh] bg-base-300 container mx-auto flex justify-center items-center rounded-2xl'>
            <h2 className='text-2xl font-bold '>There Is Nothing In Read List</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
            {
                filterReadList.map((book, ind) => <AllBookMap key={ind} book={book}></AllBookMap>)
            }
        </div>
    );
};

export default ShowAddToRead;