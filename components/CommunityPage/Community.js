import React, { useEffect, useState } from 'react';
import SidebarCommunityPage from './Sidebar';
import TopAuthor from './TopAuthor';
import Profile from './Profile';
import SinglePost from './Posts';
import WriteaPost from './WriteaPost';
import CNavBar from './CNavBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Posts from './Posts';
import FriendReqest from './FriendReqest';
import Navbar from '../Shared/Navbar/Navbar';

const Community = () => {
    const [user, error] = useAuthState(auth);
    const [searchIndex, setSearchIndex] = useState("")
    // const [first, setFirst] = useState('');
    const [searchLoading, setSearchLoading] = useState(false)
    const [spninerLoading, setSpinnerLoading] = useState(false)


    const searchInputData = (event) => {
        event.preventDefault();
        const searchData = event.target.searchData.value;
        console.log(searchData)
        setSpinnerLoading(true)
        setTimeout(() => {
            setSearchIndex(searchData);
            setSpinnerLoading(false)
        }, 1000);
        setSearchLoading(true)

    }




    return (
        <div >
            {/* <CNavBar></CNavBar> */}
            <Navbar/>
            <div className='grid grid-cols-5'>
                <div className='col-span-1 pt-18 bg-[#F0F2F5] h-screen sticky top-0'>
                    <SidebarCommunityPage></SidebarCommunityPage>
                </div>

                <div className='col-span-4'>
                    {/* >>>>>>>>>>> Top Banner <<<<<<<<<<<<<<<<<<< */}

                    <div style={{ backgroundImage: `url("https://i.ibb.co/BNn6NVD/communitypage-hero-header-desktop.jpg")` }} className="pt-32">
                        <h1 className='text-[40px] text-center text-white'>HelloTalk Community</h1>
                        <p className='text-center text-white'>1,468 Members Online ⦾ 238K Discussions ⦾ 23.3K Solutions </p>
                        <div className='w-3/4 lg:w-1/2 mx-auto py-7'>
                            <form onSubmit={searchInputData}>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#fff] focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Question, explore user experience" name="searchData" required />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

                                </div>
                            </form>
                        </div>
                    </div>

                    {/* >>>>>>>>>>>>>>>>>>> Discussion <<<<<<<<<<<<<<<<< */}

                    <div className='bg-[#F0F2F5] p-2'>
                        <div className=' mx-auto '>
                            <div className='grid grid-cols-9 p-2 gap-6 '>
                                <div className='col-span-6 '>
                                    {
                                        user &&
                                        <WriteaPost></WriteaPost>
                                    }
                                    <Posts
                                        searchIndex={searchIndex}
                                        searchLoading={searchLoading}
                                        setSearchIndex={setSearchIndex}
                                        setSearchLoading={setSearchLoading}
                                        spninerLoading={spninerLoading}
                                    ></Posts>
                                </div>

                                {/* >>>>>>>> Leader chart <<<<<<<<<<<<<<<<  */}
                                <div className='col-span-3 mt-8 pr-2'>
                                    {/* >>>>>>>>>>>>>>>>>>>> Profile <<<<<<<<<<<<<<<<<< */}
                                    <Profile></Profile>
                                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>Leader borad<<<<<<<<<<<<<<<<<<< */}
                                    <TopAuthor></TopAuthor>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Community;