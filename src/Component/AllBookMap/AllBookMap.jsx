import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const AllBookMap = ({ book }) => {
    console.log(book)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-6 w-full border border-neutral/10">
                <figure className='bg-base-300'>
                    <img className='rounded-xl my-6 h-65 bg-base-300' 
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        {book.tags.map((tag, ind) => <div key={ind} className="badge badge-soft badge-success">{tag}</div>)}
                    </div>
                    <h2 className="card-title text-2xl font-bold">
                        {book.bookName}
                    </h2>
                    <p className='font-bold pb-3'>By : {book.publisher}</p>
                    <div className="card-actions justify-between border-t border-dotted pt-3">
                        <div className="">Fashion</div>
                        <div className="flex items-center gap-2 ">
                            <p>{book.rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBookMap;