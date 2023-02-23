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
                <Head>
                    <title>Apply for teacher - HelloTalk</title>
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

export default applyteacher;