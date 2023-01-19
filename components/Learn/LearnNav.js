import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Navbar from '../Shared/Navbar/Navbar';

const LearnNav = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        // <>
        //     <Navbar/>
        // </>
        <nav className='relative z-10'>
            <div className="lg:md:px-10 px-0 shadow-xl navbar mx-auto fixed bg-gradient-from-l bg-gradient-to-l from-[#194881] to-[rgb(53,106,172)]">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-featherBold menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-300 rounded-box w-52  font-medium">
                            <li><Link href='/contact'>Profile</Link></li>
                            <li><Link href='/blogs'>Blog</Link></li>
                            <li><Link href='/courses'>Courses</Link></li>
                            <li><Link href='/learn'>Learn</Link></li>
                            <li><Link href='/contact'>Contact Us</Link></li>
                            {user ?
                                <>
                                    <li><Link href='/dashboard'>Dashboard</Link></li>
                                    <li> <button className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]" onClick={logout}>Log Out</button>
                                    </li>
                                </>
                                :
                                <li> <Link className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]" href="/signin">Log In</Link>
                                </li>
                            }
                            
                        </ul>
                    </div>
                    <Link href="/" className="flex text-2xl w-[50px] items-center"><img src="Logo2.png" alt="/" /><p className="ml-2 normal-case text-xl lg:text-2xl text-white font-featherBold">HelloTalk</p></Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="font-featherBold menu menu-horizontal px-1 text-white font-medium">
                        <li><Link href='/blogs'>Blog</Link></li>
                            <li><Link href='/courses'>Courses</Link></li>
                            <li><Link href='/learn'>Learn</Link></li>
                        <li><Link href='/contact'>Contact Us</Link></li>

                        <li>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-[250%] p-2 shadow bg-green-200 rounded-box w-52 font-bold text-[#333]">
                                    <li><Link href='/profile'>Profile</Link></li>
                                    {user ?
                                        <>
                                            <li><Link href='/dashboard'>Dashboard</Link></li>
                                            <li> <button className="mx-auto mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]" onClick={logout}>Log Out</button>
                                            </li>
                                        </>
                                        :
                                        <li> <Link className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]" href="/signin">Log In</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </li>                       
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default LearnNav;