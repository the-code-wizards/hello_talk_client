import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import MyCourses from '../../components/MyProfile/MyCourses';
import MyProfile from '../../components/MyProfile/MyProfile';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PrivateRoute from '../../components/hooks/privateRoute';

const Myprofile = () => {
  const [user, error] = useAuthState(auth);
  if (!user) {
    window.location.href = '/signin';
  }
    return (
      <div>
        <Navbar></Navbar>
        <div className='grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]'>
                <DashSidebar />
                git add<MyProfile/>
            </div>
      
      </div>
    );
};

export default Myprofile;