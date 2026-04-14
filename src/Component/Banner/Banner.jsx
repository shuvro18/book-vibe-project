import React from 'react';
import hero from "../../assets/hero_img.jpg";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] container mx-auto rounded-2xl mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                    <img
                        src={hero}
                    />
                    <div className='space-y-10'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-success text-white font-bold">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;