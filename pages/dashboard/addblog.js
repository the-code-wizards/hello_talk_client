import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AddBlog from '../../components/Dashboard/UserComps/AddBlog';
import PrivateRoute from '../../components/hooks/privateRoute';
import Navbar from '../../components/Shared/Navbar/Navbar';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

const AdBlog = () => {
  // const [user, error] = useAuthState(auth);
  // if (!user) {
  //   window.location.href = '/signin';
  // }
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
          <DashSidebar />
          <AddBlog />
        </div>
      </PrivateRoute>
    </div>
  );
};

export default AdBlog;
