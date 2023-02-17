import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllUsers from '../../components/Dashboard/UserComps/AllUsers';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const allusers = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - All Users</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AllUsers />
          </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default allusers;
