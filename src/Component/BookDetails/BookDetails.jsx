import React, { useContext, } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { bookContextApi } from '../context/BookContext';


const BookDetails = () => {
    const {bookId} = useParams();
    const books = useLoaderData();
    
    const expectedBook = books.find(book=> book.bookId == bookId);
    

    const {handleAddToRead} = useContext(bookContextApi)
    const {handleAddToWishList} = useContext(bookContextApi)

    return (
        <div className='container mx-auto mt-20'>
            <div className="card lg:card-side bg-base-100 grid grid-cols-2 gap-3">
                <figure className='w-full flex items-center justify-center bg-gray-100 rounded-2xl'>
                    <img className='h-100 w-auto'
                        src={expectedBook.image}
                        alt="Album" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-3xl">{expectedBook.bookName}</h2>
                    <p className='border-t border-dotted pt-2 font-bold text-neutral/50'> By: {expectedBook.author}</p>
                    <h4 className='border-b border-dotted pb-2'>{expectedBook.category}</h4>
                    <p> <span className='font-bold'>Review : </span> <span className="text-neutral/50">{expectedBook.review}</span></p>
                    <div className='flex gap-4'><span className='font-bold'>Tags</span>
                        {
                            expectedBook.tags.map((element,ind)=> <div key={ind} className="badge badge-soft badge-success">{element}</div>)
                        }
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='text-neutral/50'>Number of pages </p>
                        <p className='font-bold'>{expectedBook.totalPages}</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='text-neutral/50'>Publisher</p>
                        <p className='font-bold'>{expectedBook.author}</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='text-neutral/50'>Year of publishing</p>
                        <p className='font-bold'>{expectedBook.yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='text-neutral/50'>Rating</p>
                        <p className='font-bold'>{expectedBook.rating}</p>
                    </div>
                    <div className="card-actions gap-4">
                        <button className="btn" onClick={()=> handleAddToRead(expectedBook)}>Read</button>
                        <button className="btn btn-info text-white" onClick={()=> handleAddToWishList(expectedBook)}>Wishlist</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default BookDetails;