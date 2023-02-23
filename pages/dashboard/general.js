import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import PrivacyPolicy from '../../components/Dashboard/UserComps/PrivacyPolicy';
import Navbar from '../../components/Shared/Navbar/Navbar';

const general = () => {
<<<<<<< HEAD
  return (
    <div>
      {/* <PrivateRoute> */}
=======
    return (
        <div>
>>>>>>> 568bef749b3d4beb766990f21992458d64d2bd2f
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
<<<<<<< HEAD
      {/* </PrivateRoute> */}
    </div>
  );
};

export default general;
=======
        </div>
    );
};

export default general;
>>>>>>> 568bef749b3d4beb766990f21992458d64d2bd2f
