import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import PremiumBlog from '../../components/Dashboard/UserComps/PremiumBlog';
import Navbar from '../../components/Shared/Navbar/Navbar';

const premiumblog = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className='grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]'>
                <DashSidebar />
                <PremiumBlog/>
            </div>
        </div>
    );
};

export default premiumblog;