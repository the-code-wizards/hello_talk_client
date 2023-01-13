import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-[#194881] relative z-10 '>
            <div className="navbar mx-auto fixed bg-[#194881] ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-featherBold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Blog</a></li>
                            <li><a>Courses</a></li>
                            <li><a>Learn</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <Link href="/" className="flex text-2xl w-[40px] items-center"><img src="Logo2.png" alt="/" /><a className="btn btn-ghost normal-case text-xl lg:text-3xl text-white font-featherBold ml-[-10px]">Hello Talk</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="font-featherBold menu menu-horizontal px-1 uppercase text-white">
                        <li><a><Link href='/blogs'>Blog</Link></a></li>
                        <li><a><Link href='/courses'>Courses</Link></a></li>
                        <li><a>Learn</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end pr-5">
                    <Link className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]" href="/signin/"> SignIn</Link>
                </div>
            </div>

        </nav>

    );
};

export default Navbar;