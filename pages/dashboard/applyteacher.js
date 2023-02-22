import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import ApplyTeacher from '../../components/Dashboard/UserComps/ApplyTeacher';
import Navbar from '../../components/Shared/Navbar/Navbar';

const applyteacher = () => {
    return (
        <div>
            <div>
        <Head>
            <title>Add Blog - HelloTalk</title>
        </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <ApplyTeacher />
          </div>
      </div>
        </div>
    );
};
