import Head from 'next/head';
import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddBlog from '../../components/Dashboard/UserComps/AddBlog';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import PrivateRoute from '../../components/hooks/privateRoute'

const AdBlog = () => {
  // const [user, error] = useAuthState(auth);
  // if (!user) {
  //   window.location.href = '/signin';
  // }
  return (
    <div>
      {/* <PrivateRoute> */}
        <div>
        <Head>
            <title>HelloTalk - Add Blog</title>
          </Head>
          <Navbar />
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <AddBlog />
          </div>
      </div>
      {/* </PrivateRoute > */}
        </div>
<<<<<<< HEAD
      {/* </PrivateRoute> */}
    </div>
  );
=======
    );
>>>>>>> 44172959292b153b5c20c284b97b899d7a5c863b
};

export default AdBlog;