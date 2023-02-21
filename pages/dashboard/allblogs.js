import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllBlogs from '../../components/Dashboard/UserComps/AllBlogs';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import PrivateRoute from '../../components/hooks/privateRoute';

const allblogs = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - All Blogs</title>
          </Head>
          <Navbar />
          <div className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AllBlogs />
          </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default allblogs;
