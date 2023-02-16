import React from 'react';
import HelpSupport from '../../components/HelpSupport/HelpSupport';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div >
            {/* <div className='bg-gradient-to-r  from-[#4ade8079] to-[#356bac71]'> */}
            <div className='min-h-screen'>
            <Navbar></Navbar>
            <div className='py-20'>
                <HelpSupport></HelpSupport>
            </div>
            <Footer></Footer>
                
            </div>
        </div>
    );
};

export default index;