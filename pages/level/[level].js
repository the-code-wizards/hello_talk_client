import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Shared/Navbar/Navbar'
import axios from 'axios';
import Link from 'next/link';
import SingleLevel from '../../components/Learn/SingleLevel';

const Level = () => {
    return (
        <div>
            <Navbar />
            <SingleLevel/>
           
        </div>
    );
};

export default Level;