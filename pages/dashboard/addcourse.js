import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddCourse from '../../components/Dashboard/UserComps/AddCourse';
// import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
          <Head>
            <title>HelloTalk - Add Course</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AddCourse />
          </div>
        </div>
<<<<<<< HEAD
      {/* </PrivateRoute> */}
    </div>
  );
=======
        {/* </PrivateRoute> */}
        </div>
    );
>>>>>>> 44172959292b153b5c20c284b97b899d7a5c863b
};

export default index;