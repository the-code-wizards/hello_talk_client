import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllTeachers from '../../components/Dashboard/UserComps/AllTeachers';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const allteachers = () => {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <AllTeachers />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default allteachers;
