import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import ApplyTeacher from '../../components/Dashboard/UserComps/ApplyTeacher';
import Navbar from '../../components/Shared/Navbar/Navbar';

const applyteacher = () => {
    return (
        <div>
            <Navbar />
            <div className='grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]'>
                <DashSidebar />
                <ApplyTeacher></ApplyTeacher>
            </div>
        </div>
    );
};

export default applyteacher;