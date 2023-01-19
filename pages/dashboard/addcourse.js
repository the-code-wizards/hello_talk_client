import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddCourse from '../../components/Dashboard/UserComps/AddCourse';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar />
            <div className='grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]'>
                <DashSidebar />
                <AddCourse/>
            </div>
        </div>
    );
};

export default index;