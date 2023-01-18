import React from 'react';
import MyCourses from '../../components/MyProfile/MyCourses';
import MyProfile from '../../components/MyProfile/MyProfile';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
      <div>
        <Navbar></Navbar>
          <div className='grid grid-cols-[350px_minmax(500px,_1fr)_350px]'>
            <div>
                <MyCourses></MyCourses>
            </div>
            <div>
                <MyProfile></MyProfile>
            </div>
            <div>
                <MyCourses></MyCourses>
            </div>
            
        </div>
        <Footer></Footer>
      </div>
    );
};

export default index;