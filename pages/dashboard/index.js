import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import Dashboard from '../../components/Dashboard/UserComps/Dashboard';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid lg:md:grid-cols-[300px_minmax(800px,_1fr)]">
          <div className="">
            <DashSidebar />
          </div>
          <Dashboard />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default index;
