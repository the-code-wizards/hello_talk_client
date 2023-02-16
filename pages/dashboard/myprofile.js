import React, { useEffect } from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import MyProfile from '../../components/MyProfile/MyProfile';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { useNavigate } from 'react-router-dom';
import PrivateRoute from '../../components/hooks/privateRoute';
import Head from 'next/head';

const Myprofile = () => {
  // const [user, error] = useAuthState(auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     // window.location.href = '/signin';
  //     navigate('/signin');
  //   }
  // }, []);
  return (
    <div>
      <PrivateRoute>
        <div>
          <Head>
            <title>HelloTalk - My Profile</title>
          </Head>
          <Navbar></Navbar>
          <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <DashSidebar />
            <MyProfile />
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default Myprofile;
