import Image from 'next/image';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Profile = () => {
    const [user, error] = useAuthState(auth);
    console.log(user)
    return (
        <div>

            {
                user &&
                <>
                    <div className=" w-80 shadow-xl mb-5 ">
                        <div className='bg-[#92deff] rounded-t-lg p-5'>
                            <div className='grid grid-cols-1 place-items-center'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} alt="Profile Picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg text-[#404854]'>
                            <h1 className='text-[20px] text-center font-bold p-3'>{user.displayName}</h1>
                        </div>
                    </div>
                </>
            }
        </div>

    );
};

export default Profile;