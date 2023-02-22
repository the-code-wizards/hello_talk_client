import Head from 'next/head';
import React from 'react';
import AllFriends from '../../components/CommunityPage/AllFriends';
import AllUsers from '../../components/CommunityPage/AllUsers';
import FriendReqest from '../../components/CommunityPage/FriendReqest';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div >
            <Head> 
                <title>HelloTalk - Friends</title>
            </Head>
            {/* <div className='bg-gradient-to-r  from-[#4ade8079] to-[#356bac71]'> */}
                <Navbar></Navbar>
            <div className="grid lg:md:grid-cols-[350px_minmax(850px,_1fr)]">
                <AllUsers/>
                <div className="pt-[6rem] ml-4">
                    <FriendReqest/>
                    <AllFriends/>
                </div>
            </div>
            
                <Footer></Footer>

        </div>
    );
};

export default index;