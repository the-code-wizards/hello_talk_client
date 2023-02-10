import React from 'react';
import HelpSupport from '../../components/HelpSupport/HelpSupport';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-20'>
            <HelpSupport></HelpSupport>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;