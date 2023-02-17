import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import Dashboard from '../../components/Dashboard/UserComps/Dashboard';
import MakeLive from '../../components/Dashboard/UserComps/MakeLive';
import Navbar from '../../components/Shared/Navbar/Navbar';

const makelive = () => {
    return (
        <div>
            <Navbar />
      <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
        <DashSidebar />
        <MakeLive />
      </div>
        </div>
    );
};

export default makelive;