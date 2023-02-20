import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import Dashboard from '../../components/Dashboard/UserComps/Dashboard';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import PrivateRoute from '../../components/hooks/privateRoute';
const index = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
      <div>
        <Head>
          <title>HelloTalk - Dashboard</title>
        </Head>
        <Navbar />
        <div className="grid lg:md:grid-cols-[300px_minmax(800px,_1fr)]">
          <div className="">
            <DashSidebar />
          </div>
          <Dashboard />
        </div>
      </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default index;
