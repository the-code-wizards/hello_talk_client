import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid  lg:md:grid-cols-[400px_minmax(800px,_1fr)]'>
                <DashSidebar />

            </div>
       </div>
    );
};

export default index;