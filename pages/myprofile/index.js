import React from 'react';
import MyCourses from '../../components/MyProfile/MyCourses';
import MyProfile from '../../components/MyProfile/MyProfile';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
      <div>
        <Navbar></Navbar>
                <MyProfile></MyProfile>
        <Footer></Footer>
      
      </div>
    );
};

export default index;