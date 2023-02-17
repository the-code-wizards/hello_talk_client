import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import CoursesBought from '../../components/Dashboard/UserComps/CoursesBought';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const coursebought = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - Courses Bought</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <CoursesBought />
          </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default coursebought;
