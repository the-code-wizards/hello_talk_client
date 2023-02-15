import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddTeacher from '../../components/Dashboard/UserComps/AddTeacher';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <AddTeacher />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default index;
