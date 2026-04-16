
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ShowAddToRead from '../ShowAddToRead/ShowAddToRead';
import ShowAddToWishList from '../ShowAddToWishList/ShowAddToWishList';
import { useState } from 'react';

const Book = () => {


    const [shortingType, setShortingType] = useState("")

    return (
        <div className='container mx-auto mt-20'>

            <div className='flex justify-center py-4'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Short: {shortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setShortingType("pages")}><a>Pages</a></li>
                        <li onClick={() => setShortingType("ratting")}><a>Ratting</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ShowAddToRead shortingType={shortingType}></ShowAddToRead>

                </TabPanel>
                <TabPanel>
                    <ShowAddToWishList shortingType={shortingType}></ShowAddToWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Book;