import Head from 'next/head';
import React from 'react';
import CNavBar from '../../components/CommunityPage/CNavBar';
import FriendReqest from '../../components/CommunityPage/FriendReqest';
import SidebarCommunityPage from '../../components/CommunityPage/Sidebar';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Head>
                <title>HelloTalk - Community</title>
            </Head>
            <CNavBar></CNavBar>
            <div className='grid grid-cols-5'>
                <div className='col-span-1 pt-18 bg-[#F0F2F5] h-screen sticky top-0'>
                    <SidebarCommunityPage></SidebarCommunityPage>
                </div>
                <div className='col-span-4'>
                    <FriendReqest></FriendReqest>
                </div>
            </div>
        </div>
    );
};

export default index;