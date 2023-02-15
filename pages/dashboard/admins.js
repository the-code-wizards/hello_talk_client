import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import Admins from '../../components/Dashboard/UserComps/Admins';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const admins = () => {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <Admins />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default admins;
