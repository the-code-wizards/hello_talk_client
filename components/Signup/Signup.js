import React from 'react';
import { HiArrowLeft } from 'react-icons/fa';
import CustomBtn from '../reusable/CustomBtn';

const Signup = () => {
    return (
        <div>
            <div className='flex justify-around'>
                <HiArrowLeft />
                <h2>Create Your Profile</h2>
                <CustomBtn>Login</CustomBtn>
            </div>
        </div>
    );
};

export default Signup;