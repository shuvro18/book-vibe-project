import React, { use } from 'react';
import AllBookMap from '../AllBookMap/AllBookMap';


const bookPromise = fetch("/booksData.json").then(res => res.json());


const AllBooks = () => {
    const book = use(bookPromise)

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-20 mb-10'>Books</h2>
            <div className='grid grid-cols-3 gap-10 container mx-auto'>
                {
                    book.map((element, ind) => <AllBookMap book={element} key={ind}></AllBookMap>)
                }
            </div>
        </div>
    );
};

export default AllBooks;