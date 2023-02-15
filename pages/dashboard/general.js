import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import PrivacyPolicy from '../../components/Dashboard/UserComps/PrivacyPolicy';
import PrivateRoute from '../../components/hooks/privateRoute';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      <PrivateRoute>
        <div>
          <Head>
            <title>HelloTalk - General</title>
          </Head>
          <Navbar />
          <div className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <PrivacyPolicy></PrivacyPolicy>
            {/* <AllBlogs /> */}
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default index;
