import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Shared/Navbar/Navbar'
import axios from 'axios';
import Link from 'next/link';
import SingleLevel from '../../components/Learn/SingleLevel';
import Sidebar from '../../components/Learn/Sidebar';
import BottomNav from '../../components/Learn/BottomNav';

const Level = () => {
    return (
        <div>

            <Navbar />
            <div className='pt-[6rem] grid lg:md:grid-cols-[250px_minmax(950px,_1fr)]'>
                <div className="lg:md:block hidden">
                    <Sidebar />
                </div>
                <SingleLevel />
                <div className="lg:md:hidden block">
                <BottomNav/>
            </div>
            </div>
           
        </div>
    );
};

export default Level;