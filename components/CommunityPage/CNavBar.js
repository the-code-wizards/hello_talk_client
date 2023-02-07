import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';


const CNavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#235490');
    const [textColor, setTextColor] = useState('white');

    const logout = () => {
        signOut(auth);
        Cookies.set("loggedin", "false");
        localStorage.removeItem('accessToken');
    };

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 200) {
                setColor('#ffffff');
                setTextColor('#235490');
            } else {
                setColor('#235490');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);



    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center py-4 px-4 text-white '>
                <Link href='/'>
                    <h1 style={{ color: `${textColor}` }} className='font-bold text-2xl font-featherBold '>
                        HelloTalk Cmty
                    </h1>
                </Link>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex font-featherBold'>
                    <li>
                        <Link href="/contact" className='p-3'>Profile</Link>
                    </li>
                    <li>
                        <Link href="/blogs" className='p-3'>Blog</Link>
                    </li>
                    <li>
                        <Link href="/courses" className='p-3'>Courses</Link>
                    </li>
                    <li>
                        <Link href="/learn" className='p-3'>Learn</Link>
                    </li>
                    <li>
                        <Link href="/faq" className='p-3'>FAQ</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='p-3'>Contact Us</Link>
                    </li>
                    {
                        !user ?
                            <li>
                                {' '}
                                <Link
                                    className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                                    href="/signin"
                                >
                                    Log In
                                </Link>
                            </li>
                            :
                            <>
                            </>
                    }


                    <div className="dropdown dropdown-end my-[-12px]">
                        {
                            user ?
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt="Profile Picture" />
                                                :
                                                <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                        }
                                    </div>
                                </label>
                                :
                                <></>
                        }
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {user ? (
                                <>
                                    <li className='px-3'>
                                        {' '}
                                        <button
                                            className=" px-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002] lg:md:w-full w-[100px] lg:md:mx-0 mx-auto"
                                            onClick={logout}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            ) :
                                <>

                                </>
                            }
                        </ul>
                    </div>
                </ul>
                {/* {user && (
                    <>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            {' '}
                            <button
                                className="mx-auto mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                                onClick={logout}
                            >
                                Log Out
                            </button>
                        </li>
                    </>
                )} */}

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                    }
                >
                    <ul className='text-gray-700'>
                        <li>
                            <Link href="/contact" className='p-5'>Profile</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className='p-5'>Blog</Link>
                        </li>
                        <li>
                            <Link href="/courses" className='p-5'>Courses</Link>
                        </li>
                        <li>
                            <Link href="/learn" className='p-5'>Learn</Link>
                        </li>
                        <li>
                            <Link href="/faq" className='p-5'>FAQ</Link>
                        </li>
                        <li>
                            <Link href="/contact" className='p-5'>Contact Us</Link>
                        </li>
                        {user ?
                            <li>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            :
                            <></>

                        }

                        {
                            !user ?
                                <li>
                                    {' '}
                                    <Link
                                        className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                                        href="/signin"
                                    >
                                        Log In
                                    </Link>
                                </li>
                                :
                                <>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default CNavBar;