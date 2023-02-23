import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';
import useFriends from '../hooks/useFriends';
import Loader from '../Shared/Loader';


const Profile = () => {
    const [user, error] = useAuthState(auth);
    const [friends, loading3] = useFriends()
    const [singleUser, loading] = useSingleUser()
    // console.log(singleUser)
    return (
        <div>

            {loading && loading3 ? <Loader /> :
                user ?
                    <>
                        <div className=" w-80 shadow-xl relative mb-40">
                            <div className='h-32 bg-[#005C85] z-10 rounded-t-lg'>
                            </div>

                            <div className=' rounded-t-lg p-5 absolute top-4 right-[100px] z-30'>
                                <div className='grid grid-cols-1 place-items-center'>
                                    <Link href="/dashboard/myprofile" target="_blank" className="cursor-pointer">
                                        <div className="avatar ">
                                            <div className="w-24 rounded-full">
                                                {
                                                    singleUser?.photoURL ?
                                                        <img src={singleUser?.photoURL} alt="Profile Picture" />
                                                        :
                                                        <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='bg-white rounded-t-[25px] rounded-b-lg text-[#404854] absolute top-[100px] h-44 w-full z-20 '>
                                <h1 className='text-[20px] text-center font-bold pt-12'>{user.displayName}</h1>

                                <div className='flex flex-col justify-center items-center mt-1'>
                                    <p className='text-center badge badge-outline'>@{singleUser.name}9</p>
                                    <div className='mt-4 flex'>
                                        <Link href="/messages" className='mx-2 flex justify-center items-center  border rounded-lg px-2 py-1 text-white bg-[#046892] hover:bg-white hover:text-[#046892] hover:border-2 hover:border-[#046892] '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" /> </svg>
                                            <span className='ml-1'>Messages</span>
                                        </Link>
                                        <div className="divider divider-horizontal mx-[-0.5rem]"></div>
                                        <Link href="/friendrequest" className='mx-2 flex justify-center items-center  border rounded-lg px-2 py-1 hover:text-white hover:bg-[#046892] bg-white text-[#046892] border-2 border-[#046892]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-friends" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="7" cy="5" r="2" /> <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /> <circle cx="17" cy="5" r="2" /> <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" /> </svg>
                                            <span className='ml-1'>Friends</span>
                                            <div className="badge ml-1 badge-[#ddd] bg-[#046892] border-none text-[#fff] font-bold">{friends?.length}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
        </div >

    );
};

export default Profile;