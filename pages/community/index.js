import React from 'react';
import Community from '../../components/CommunityPage/Community';
import Navbar from '../../components/shared/Navbar/Navbar'

const index = () => {
    return (
        <div>
            <Navbar/>
            <Community></Community>
        </div>
    );
};

export default index;