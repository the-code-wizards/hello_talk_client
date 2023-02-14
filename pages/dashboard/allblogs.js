import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllBlogs from '../../components/Dashboard/UserComps/AllBlogs';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const allblogs = () => {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <AllBlogs />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default allblogs;
