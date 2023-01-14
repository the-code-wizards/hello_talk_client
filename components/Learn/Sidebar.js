import React from 'react';
import { useRouter } from 'next/router'
import { GiNotebook } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';
import { BsStack, BsPeople } from 'react-icons/bs';

const Sidebar = () => {
    const router = useRouter()
    return (
        <div className="drawer drawer-mobile m-4 sticky">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side lg:md:w-[60%] h-[50%] rounded-2xl shadow-xl">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu lg:md:p-4 w-80 bg-[#dbf8df] text-[#504f4f] font-bold border-[1px] ">
                    {/* <!-- Sidebar content here --> */}
                    <li><button className="" type="button" onClick={() => router.push('/learn')}><GiNotebook className="text-xl text-red-400 mr-[5px]" />Learn</button></li>
                    <li><button type="button" onClick={() => router.push('/shop')}><AiOutlineShoppingCart className="text-xl text-red-400 mr-[5px]" />Shop</button></li>
                    <li><button type="button" onClick={() => router.push('/blog')}><FaBloggerB className="text-xl text-red-400 mr-[5px]" />Blog</button></li>
                    <li><button type="button" onClick={() => router.push('/course')}><BsStack className="text-xl text-red-400 mr-[5px]" />Course</button></li>
                    <li><button type="button" onClick={() => router.push('/community')}><BsPeople className="text-xl text-red-400 mr-[5px]" />Community</button></li>
                    {/* <li><button type="button" onClick={() => router.push('/community')}><IoPeopleOutline className="text-xl text-red-400 mr-[5px]" />Community</button></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;