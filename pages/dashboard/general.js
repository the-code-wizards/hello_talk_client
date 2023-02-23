import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import PrivacyPolicy from '../../components/Dashboard/UserComps/PrivacyPolicy';
import Navbar from '../../components/Shared/Navbar/Navbar';

const general = () => {
    return (
        <div>
        <div>
          <Head>
            <title>General - HelloTalk</title>
          </Head>
          <Navbar />
          <div className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <PrivacyPolicy></PrivacyPolicy>
          </div>
        </div>
        </div>
    );
};

export default general;