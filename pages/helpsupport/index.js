import React from 'react';
import HelpSupport from '../../components/HelpSupport/HelpSupport';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div className='bg-fixed' style={{backgroundImage: "url('https://i.ibb.co/wpJ1j6Y/teaching-strategies-for-connecting-students-illustration.jpg')" }}>
            {/* <div className='bg-gradient-to-r  from-[#4ade8079] to-[#356bac71]'> */}
            <div className='bg-[#ffffffea] min-h-screen'>
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