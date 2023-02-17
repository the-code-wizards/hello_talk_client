import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllTeachers from '../../components/Dashboard/UserComps/AllTeachers';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import PrivateRoute from '../../components/hooks/privateRoute';

const allteachers = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - All Teachers</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AllTeachers />
          </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default allteachers;
