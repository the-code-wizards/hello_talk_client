import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import ApplyTeacher from '../../components/Dashboard/UserComps/ApplyTeacher';
import Navbar from '../../components/Shared/Navbar/Navbar';
//all fixed

const applyteacher = () => {
    return (
        <div>
            <div>
<<<<<<< HEAD
        <Head>
            <title>Apply for teacher - HelloTalk</title>
        </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <ApplyTeacher />
          </div>
      </div>
=======
                <Head>
                    <title>Apply for teacher - HelloTalk</title>
                </Head>
                <Navbar />
                <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
                    <DashSidebar />
                    <ApplyTeacher />
                </div>
            </div>
>>>>>>> 568bef749b3d4beb766990f21992458d64d2bd2f
        </div>
    );
};

<<<<<<< HEAD
export default applyteacher
=======
export default applyteacher;
>>>>>>> 568bef749b3d4beb766990f21992458d64d2bd2f
