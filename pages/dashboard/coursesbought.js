import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import CoursesBought from '../../components/Dashboard/UserComps/CoursesBought';
import Navbar from '../../components/Shared/Navbar/Navbar';

const coursebought = () => {
  return (
    <div>
      <Navbar />
      <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
        <DashSidebar />
        <CoursesBought/>
      </div>
    </div>
  );
};

export default coursebought;
