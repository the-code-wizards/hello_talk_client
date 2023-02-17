import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddTeacher from '../../components/Dashboard/UserComps/AddTeacher';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - Add Teacher</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AddTeacher />
          </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default index;
