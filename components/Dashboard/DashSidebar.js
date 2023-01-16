import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashSidebar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile pt-[4.5rem]">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="h-full menu p-4  w-64 bg-base-100 gap-y-2 text-[#fff]">
                    {/* <!-- Sidebar content here --> */}
                    {user &&
                        <>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/dashboard/orders">Add Blog</Link></li>
                            <li><Link href="/dashboard/orders">All Blogs</Link></li>
                            <li><Link href="/dashboard/review">Add Course</Link></li>
                            <li><Link href="/dashboard/review">Add Offer</Link></li>
                            <li><Link href="/dashboard/review">All Offers</Link></li>
                            <li><Link href="/dashboard/review">Make Admin</Link></li>
                            <li><Link href="/dashboard/review">All Users</Link></li>
                            <li><Link href="/dashboard/review">Courses Bought</Link></li>
                            <li><Link href="/dashboard/review">Pro Package Bought</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default DashSidebar;