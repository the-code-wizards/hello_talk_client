import React from 'react';
import FriendReqest from '../../components/CommunityPage/FriendReqest';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div >
            {/* <div className='bg-gradient-to-r  from-[#4ade8079] to-[#356bac71]'> */}
                <Navbar></Navbar>
                <FriendReqest/>
                <Footer></Footer>

        </div>
    );
};

export default index;