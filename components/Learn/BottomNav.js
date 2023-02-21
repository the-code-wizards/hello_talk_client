import React from 'react';
import { GiNotebook } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';
import { BsStack, BsPeople } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BottomNav = () => {
    const router = useRouter();

    return (
        <div>
            <div className="btm-nav bg-green-200 text-[#333]">
                <Link href="/learn" className={` ${router.pathname == "/learn" ? "active bg-green-400 text-[#fff]" : ""}`}>
                   <GiNotebook className="text-xl text-red-400" />
                    <span className="btm-nav-label">Learn</span>
                </Link>
                {/* <Link href="/shop" className={` ${router.pathname == "/shop" ? "active bg-green-400 text-[#fff]" : ""}`}>
                    <AiOutlineShoppingCart className="text-xl text-red-400" />
                    <span className="btm-nav-label">Shop</span>
                </Link> */}
                <Link href="/blogs" className={` ${router.pathname == "/blogs" ? "active bg-green-400 text-[#fff]" : ""}`}>
                    <FaBloggerB className="text-xl text-red-400" />
                    <span className="btm-nav-label">Blog</span>
                </Link>
                <Link href="/courses" className={` ${router.pathname == "/courses" ? "active bg-green-400 text-[#fff]" : ""}`}>
                    <BsStack className="text-xl text-red-400" />
                    <span className="btm-nav-label">Course</span>
                </Link>
                <Link href="/community" className={` ${router.pathname == "/community" ? "active bg-green-400 text-[#fff]" : ""}`}>
                    <BsPeople className="text-xl text-red-400" />
                    <span className="btm-nav-label">Community</span>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;