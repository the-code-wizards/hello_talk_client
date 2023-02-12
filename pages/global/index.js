import React from 'react';
import PrivacyPolicy from '../../components/Dashboard/UserComps/PrivacyPolicy';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar/>
                <PrivacyPolicy></PrivacyPolicy>
            <Footer/>
        </div>
    );
};

export default index;