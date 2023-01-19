import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllCourses from '../../components/Dashboard/UserComps/AllCourses';
import Navbar from '../../components/Shared/Navbar/Navbar';

const allcourses = () => {
  return (
    <div>
      <Navbar />
      <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
        <DashSidebar />
        <AllCourses/>
      </div>
    </div>
  );
};

export default allcourses;
