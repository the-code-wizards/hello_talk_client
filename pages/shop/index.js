import React from 'react';
import Courses from '../../components/Courses/Courses'
import Packages from '../../components/packages/Package'
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer'

const index = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='lg:md:text-3xl text-2xl text-center font-featherBold pt-24 text-[#3C3C3C]'>Packages that you`&apos;`ll love</h1>
                <Packages />
                <Courses /> 
          </div>
<Footer/>
            
        </div>
    );
};

export default index;