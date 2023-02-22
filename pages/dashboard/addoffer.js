import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddOffer from '../../components/Dashboard/UserComps/AddOffer';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import PrivateRoute from '../../components/hooks/privateRoute';


const index = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
        <Head>
            <title>HelloTalk - Add Offers</title>
          </Head>
        <Navbar />
        <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <AddOffer />
        </div>
        </div>
      {/* </PrivateRoute> */}
    </div>
  );
};

export default index;